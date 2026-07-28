import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import * as THREE from 'three';

// Create 3D flower geometry with actual petals
function createFlowerGeometry(petalCount = 5) {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const indices = [];
  const normals = [];

  const petalLength = 0.4;
  const petalWidth = 0.25;
  
  // Create each petal as a curved surface
  for (let p = 0; p < petalCount; p++) {
    const angle = (p / petalCount) * Math.PI * 2;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    
    const baseIndex = vertices.length / 3;
    
    // Petal vertices (curved outward)
    for (let i = 0; i <= 5; i++) {
      for (let j = 0; j <= 3; j++) {
        const u = i / 5;
        const v = (j / 3) - 0.5;
        
        const x = cos * u * petalLength;
        const y = sin * u * petalLength;
        const z = Math.sin(u * Math.PI) * 0.1 - Math.abs(v) * 0.05;
        
        const width = petalWidth * Math.sin(u * Math.PI) * (1 - Math.abs(v * 0.5));
        
        vertices.push(
          x - sin * v * width,
          y + cos * v * width,
          z
        );
        
        normals.push(0, 0, 1);
      }
    }
    
    // Create triangles for this petal
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 3; j++) {
        const a = baseIndex + i * 4 + j;
        const b = baseIndex + i * 4 + j + 1;
        const c = baseIndex + (i + 1) * 4 + j;
        const d = baseIndex + (i + 1) * 4 + j + 1;
        
        indices.push(a, b, c);
        indices.push(b, d, c);
      }
    }
  }
  
  // Add center
  const centerBase = vertices.length / 3;
  const centerRadius = 0.08;
  const centerSegs = 12;
  
  for (let i = 0; i <= centerSegs; i++) {
    const angle = (i / centerSegs) * Math.PI * 2;
    vertices.push(
      Math.cos(angle) * centerRadius,
      Math.sin(angle) * centerRadius,
      0.05
    );
    normals.push(0, 0, 1);
  }
  
  vertices.push(0, 0, 0.08);
  normals.push(0, 0, 1);
  
  for (let i = 0; i < centerSegs; i++) {
    indices.push(centerBase + i, centerBase + i + 1, vertices.length / 3 - 1);
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  
  return geometry;
}

// Create 3D leaf geometry
function createLeafGeometry() {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const indices = [];
  const normals = [];

  const length = 0.5;
  const width = 0.3;
  
  // Create leaf shape (pointed oval)
  const segments = 8;
  for (let i = 0; i <= segments; i++) {
    for (let j = 0; j <= 2; j++) {
      const u = i / segments;
      const v = (j / 2) - 0.5;
      
      // Leaf profile (wider in middle, pointed at tip)
      const widthScale = Math.sin(u * Math.PI) * (1 - u * 0.3);
      const curl = Math.sin(u * Math.PI) * 0.08;
      
      const x = u * length - length * 0.5;
      const y = v * width * widthScale;
      const z = curl * (1 - Math.abs(v * 2));
      
      vertices.push(x, y, z);
      normals.push(0, 0, 1);
    }
  }
  
  // Create triangles
  for (let i = 0; i < segments; i++) {
    for (let j = 0; j < 2; j++) {
      const a = i * 3 + j;
      const b = i * 3 + j + 1;
      const c = (i + 1) * 3 + j;
      const d = (i + 1) * 3 + j + 1;
      
      indices.push(a, b, c);
      indices.push(b, d, c);
    }
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  
  return geometry;
}

// Lighter pastel colors for 3D flowers with proper lighting
const flowerColors = {
  pink: new THREE.Color(0xFFB6D9),      // Light pink
  pinkLight: new THREE.Color(0xFFC9E5), // Very light pink
  lavender: new THREE.Color(0xD4A5D4),  // Light lavender
  lavenderLight: new THREE.Color(0xE6D5F5), // Very light lavender
};

// Autumn leaf colors
const leafColors = {
  amber: new THREE.Color(0xFFD700),     // Lighter golden
  rust: new THREE.Color(0xFF8C69),      // Lighter salmon/orange
  burgundy: new THREE.Color(0xCD5C5C),  // Lighter Indian red
  olive: new THREE.Color(0xBDB76B),     // Lighter khaki/olive
};

function FlowersFalling({ count = 500, area = 28 }) {
  const pinkMeshRef = useRef();
  const lavenderMeshRef = useRef();
  
  const flowerGeometry = useMemo(() => createFlowerGeometry(5), []);
  
  // Materials with lighter, pastel colors
  const pinkMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: flowerColors.pink,
    emissive: flowerColors.pinkLight,
    emissiveIntensity: 0.3,
    roughness: 0.5,
    metalness: 0.1,
    transparent: true,
    opacity: 0.92,
    side: THREE.DoubleSide,
  }), []);
  
  const lavenderMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: flowerColors.lavender,
    emissive: flowerColors.lavenderLight,
    emissiveIntensity: 0.3,
    roughness: 0.5,
    metalness: 0.1,
    transparent: true,
    opacity: 0.92,
    side: THREE.DoubleSide,
  }), []);

  // Split count between pink and lavender
  const pinkCount = Math.floor(count * 0.5);
  const lavenderCount = count - pinkCount;

  // Precompute instances data with smaller sizes
  const pinkData = useMemo(() => {
    const dummy = [];
    for (let i = 0; i < pinkCount; i++) {
      dummy.push({
        x: (Math.random() - 0.5) * area,
        y: Math.random() * area,
        z: (Math.random() - 0.5) * area,
        ry: Math.random() * Math.PI * 2,
        rx: Math.random() * 0.5,
        rz: Math.random() * Math.PI * 2,
        s: 0.06 + Math.random() * 0.15,
        speed: 0.006 + Math.random() * 0.02,
        swayAmp: 0.06 + Math.random() * 0.15,
        swayFreq: 0.12 + Math.random() * 0.35,
        rotSpeed: 0.2 + Math.random() * 0.3,
      });
    }
    return dummy;
  }, [pinkCount, area]);

  const lavenderData = useMemo(() => {
    const dummy = [];
    for (let i = 0; i < lavenderCount; i++) {
      dummy.push({
        x: (Math.random() - 0.5) * area,
        y: Math.random() * area,
        z: (Math.random() - 0.5) * area,
        ry: Math.random() * Math.PI * 2,
        rx: Math.random() * 0.5,
        rz: Math.random() * Math.PI * 2,
        s: 0.06 + Math.random() * 0.15,
        speed: 0.006 + Math.random() * 0.02,
        swayAmp: 0.06 + Math.random() * 0.15,
        swayFreq: 0.12 + Math.random() * 0.35,
        rotSpeed: 0.2 + Math.random() * 0.3,
      });
    }
    return dummy;
  }, [lavenderCount, area]);

  const mat = useMemo(() => new THREE.Matrix4(), []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    
    // Update pink flowers with 3D rotation
    pinkData.forEach((d, i) => {
      d.y -= d.speed;
      if (d.y < -area * 0.5) {
        d.y = area * 0.5;
        d.x = (Math.random() - 0.5) * area;
        d.z = (Math.random() - 0.5) * area;
      }
      const sway = Math.sin(time * d.swayFreq + i) * d.swayAmp;
      
      // 3D rotation for realism
      const rotY = d.ry + time * d.rotSpeed;
      const rotX = d.rx + sway * 0.4;
      const rotZ = d.rz + Math.cos(time * d.swayFreq * 0.5 + i) * 0.3;

      const scale = d.s;
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(rotX, rotY, rotZ));
      mat.compose(new THREE.Vector3(d.x + sway, d.y, d.z), q, new THREE.Vector3(scale, scale, scale));
      pinkMeshRef.current.setMatrixAt(i, mat);
    });
    pinkMeshRef.current.instanceMatrix.needsUpdate = true;

    // Update lavender flowers with 3D rotation
    lavenderData.forEach((d, i) => {
      d.y -= d.speed;
      if (d.y < -area * 0.5) {
        d.y = area * 0.5;
        d.x = (Math.random() - 0.5) * area;
        d.z = (Math.random() - 0.5) * area;
      }
      const sway = Math.sin(time * d.swayFreq + i + 100) * d.swayAmp;
      
      // 3D rotation for realism
      const rotY = d.ry + time * d.rotSpeed;
      const rotX = d.rx + sway * 0.4;
      const rotZ = d.rz + Math.cos(time * d.swayFreq * 0.5 + i) * 0.3;

      const scale = d.s;
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(rotX, rotY, rotZ));
      mat.compose(new THREE.Vector3(d.x + sway, d.y, d.z), q, new THREE.Vector3(scale, scale, scale));
      lavenderMeshRef.current.setMatrixAt(i, mat);
    });
    lavenderMeshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <instancedMesh ref={pinkMeshRef} args={[flowerGeometry, pinkMaterial, pinkCount]} frustumCulled>
      </instancedMesh>
      <instancedMesh ref={lavenderMeshRef} args={[flowerGeometry, lavenderMaterial, lavenderCount]} frustumCulled>
      </instancedMesh>
    </>
  );
}

function LeavesFalling({ count = 150, area = 28 }) {
  const amberRef = useRef();
  const rustRef = useRef();
  const burgundyRef = useRef();
  const oliveRef = useRef();
  
  const leafGeometry = useMemo(() => createLeafGeometry(), []);
  
  // Materials for different leaf colors - lighter shades
  const amberMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: leafColors.amber,
    emissive: new THREE.Color(0xFFE87C),
    emissiveIntensity: 0.25,
    roughness: 0.65,
    metalness: 0.05,
    transparent: true,
    opacity: 0.88,
    side: THREE.DoubleSide,
  }), []);
  
  const rustMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: leafColors.rust,
    emissive: new THREE.Color(0xFFA07A),
    emissiveIntensity: 0.2,
    roughness: 0.65,
    metalness: 0.05,
    transparent: true,
    opacity: 0.88,
    side: THREE.DoubleSide,
  }), []);
  
  const burgundyMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: leafColors.burgundy,
    emissive: new THREE.Color(0xF08080),
    emissiveIntensity: 0.25,
    roughness: 0.65,
    metalness: 0.05,
    transparent: true,
    opacity: 0.88,
    side: THREE.DoubleSide,
  }), []);
  
  const oliveMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: leafColors.olive,
    emissive: new THREE.Color(0xEEE8AA),
    emissiveIntensity: 0.2,
    roughness: 0.65,
    metalness: 0.05,
    transparent: true,
    opacity: 0.88,
    side: THREE.DoubleSide,
  }), []);

  const perColor = Math.floor(count / 4);
  const amberCount = perColor;
  const rustCount = perColor;
  const burgundyCount = perColor;
  const oliveCount = count - (perColor * 3);

  // Create leaf data for each color
  const amberData = useMemo(() => createLeafData(amberCount, area), [amberCount, area]);
  const rustData = useMemo(() => createLeafData(rustCount, area), [rustCount, area]);
  const burgundyData = useMemo(() => createLeafData(burgundyCount, area), [burgundyCount, area]);
  const oliveData = useMemo(() => createLeafData(oliveCount, area), [oliveCount, area]);

  const mat = useMemo(() => new THREE.Matrix4(), []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    updateLeaves(amberData, amberRef, mat, time, area, 0);
    updateLeaves(rustData, rustRef, mat, time, area, 50);
    updateLeaves(burgundyData, burgundyRef, mat, time, area, 100);
    updateLeaves(oliveData, oliveRef, mat, time, area, 150);
  });

  return (
    <>
      <instancedMesh ref={amberRef} args={[leafGeometry, amberMaterial, amberCount]} frustumCulled />
      <instancedMesh ref={rustRef} args={[leafGeometry, rustMaterial, rustCount]} frustumCulled />
      <instancedMesh ref={burgundyRef} args={[leafGeometry, burgundyMaterial, burgundyCount]} frustumCulled />
      <instancedMesh ref={oliveRef} args={[leafGeometry, oliveMaterial, oliveCount]} frustumCulled />
    </>
  );
}

function createLeafData(count, area) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      x: (Math.random() - 0.5) * area,
      y: Math.random() * area,
      z: (Math.random() - 0.5) * area,
      rx: Math.random() * Math.PI * 2,
      ry: Math.random() * Math.PI * 2,
      rz: Math.random() * Math.PI * 2,
      s: 0.15 + Math.random() * 0.3,
      speed: 0.004 + Math.random() * 0.015,
      swayAmp: 0.08 + Math.random() * 0.2,
      swayFreq: 0.1 + Math.random() * 0.3,
      spinSpeed: 0.4 + Math.random() * 0.8,
      wobble: 0.3 + Math.random() * 0.6,
    });
  }
  return data;
}

function updateLeaves(data, meshRef, mat, time, area, offset) {
  data.forEach((d, i) => {
    d.y -= d.speed;
    if (d.y < -area * 0.5) {
      d.y = area * 0.5;
      d.x = (Math.random() - 0.5) * area;
      d.z = (Math.random() - 0.5) * area;
    }
    
    const idx = i + offset;
    const sway = Math.sin(time * d.swayFreq + idx) * d.swayAmp;
    const swayZ = Math.cos(time * d.swayFreq * 0.7 + idx) * d.swayAmp * 0.5;
    
    // Tumbling rotation like real falling leaves
    const rotX = d.rx + time * d.spinSpeed + Math.sin(time * d.wobble) * 0.5;
    const rotY = d.ry + time * d.spinSpeed * 1.2;
    const rotZ = d.rz + time * d.spinSpeed * 0.8 + Math.cos(time * d.wobble) * 0.4;

    const scale = d.s;
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(rotX, rotY, rotZ));
    mat.compose(
      new THREE.Vector3(d.x + sway, d.y, d.z + swayZ), 
      q, 
      new THREE.Vector3(scale, scale, scale)
    );
    meshRef.current.setMatrixAt(i, mat);
  });
  meshRef.current.instanceMatrix.needsUpdate = true;
}

const FlowersCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#FFB6D9" />
          <pointLight position={[-10, -10, 5]} intensity={0.6} color="#C3AED6" />
          <directionalLight position={[5, 5, 5]} intensity={0.4} color="#FFFFFF" />
          <group rotation={[0, 0, 0]}>
            <FlowersFalling />
            <LeavesFalling />
          </group>
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default FlowersCanvas;