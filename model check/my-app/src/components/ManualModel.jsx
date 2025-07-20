import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const Model = () => {
  const gltf = useGLTF('/model/scene.gltf'); // make sure this path is correct
  return <primitive object={gltf.scene} scale={0.75} />;
};

const ManualModelCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [2, 2, 4], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <OrbitControls enableZoom />
        <Model />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ManualModelCanvas;
