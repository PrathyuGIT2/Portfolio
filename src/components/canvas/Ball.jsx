import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { CanvasTexture, LinearFilter } from "three";

import CanvasLoader from "../Loader";

// Create a warm fall gradient texture for the ball surface
const createGradientTexture = () => {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  // Diagonal linear gradient for a rich autumn blend
  const grad = ctx.createLinearGradient(0, 0, size, size);
  // Warm fall gradient: amber -> pumpkin
  grad.addColorStop(0, "#F2C57C"); // amber
  grad.addColorStop(1, "#D95F1A"); // pumpkin orange

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  const texture = new CanvasTexture(canvas);
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.needsUpdate = true;
  return texture;
};

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const gradientMap = useMemo(() => createGradientTexture(), []);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          map={gradientMap}
          color={'#ffffff'}
          roughness={0.5}
          metalness={0.1}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
