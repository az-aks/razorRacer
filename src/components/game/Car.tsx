import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';

const Car = ({ position = [0, 0.5, 0], rotation = [0, 0, 0] }) => {
  const meshRef = useRef();

  useFrame(() => {
    // Car movement logic
  });

  return (
    <RigidBody position={position} rotation={rotation} type="dynamic">
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 0.5, 2]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </RigidBody>
  );
};

export default Car;