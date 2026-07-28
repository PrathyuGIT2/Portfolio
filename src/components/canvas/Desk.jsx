import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, useGLTF } from '@react-three/drei';

// Simple 3D desk scene with a laptop, coffee mug, and decor in pastel theme

const Laptop = ({ scale = 0.7, position = [0, -0.9, 0], rotation = [0, Math.PI / 8, 0] }) => {
  const gltf = useGLTF('./desktop_pc/scene.gltf');
  return (
    <primitive object={gltf.scene} scale={scale} position={position} rotation={rotation} />
  );
};

useGLTF.preload('./desktop_pc/scene.gltf');

const CoffeeMug = ({ position = [1.2, -0.85, 0.2] }) => {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.18, 0.18, 0.28, 32]} />
        <meshStandardMaterial color={'#FFC9E5'} roughness={0.4} metalness={0.05} />
      </mesh>
      <mesh position={[0, 0.14, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 0.02, 32]} />
        <meshStandardMaterial color={'#FFF7FB'} roughness={0.6} metalness={0.05} />
      </mesh>
      <mesh position={[0.22, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.11, 0.03, 16, 32]} />
        <meshStandardMaterial color={'#E6D5F5'} roughness={0.4} />
      </mesh>
    </group>
  );
};

const Plant = ({ position = [-1.2, -0.83, -0.2] }) => {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.14, 0.16, 0.14, 24]} />
        <meshStandardMaterial color={'#FFD6E8'} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.14, 0]} castShadow>
        <coneGeometry args={[0.26, 0.5, 16]} />
        <meshStandardMaterial color={'#B7E4C7'} roughness={0.4} />
      </mesh>
    </group>
  );
};

const Table = () => {
  return (
    <group>
      {/* Table top */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[6, 2.5]} />
        <meshStandardMaterial color={'#FFF1F6'} />
      </mesh>
      {/* Backdrop wall strip for visual separation */}
      <mesh position={[0, 0.2, -1.3]} receiveShadow>
        <boxGeometry args={[6.2, 1.2, 0.1]} />
        <meshStandardMaterial color={'#FAE6F0'} />
      </mesh>
    </group>
  );
};

const DeskScene = () => {
  return (
    <group>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 2]} intensity={0.9} color={'#FFD6E8'} castShadow />
      <pointLight position={[-3, 2, 2]} intensity={0.6} color={'#C3AED6'} />

      <Table />
      <Laptop />
      <CoffeeMug />
      <Plant />
    </group>
  );
};

const DeskCanvas = () => {
  return (
    <div className="relative w-full h-64 md:h-80 my-8 pointer-events-none">
      <Canvas camera={{ position: [0, 0.6, 3.8], fov: 40 }} shadows>
        <Suspense fallback={null}>
          <DeskScene />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default DeskCanvas;