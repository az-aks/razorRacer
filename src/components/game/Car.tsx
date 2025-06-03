import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useRapier } from '@react-three/rapier';

const Car = ({ position, rotation, controls }) => {
  const meshRef = useRef();
  const { world } = useRapier();

  useEffect(() => {
    // Initialize car physics here
    const carBody = world.createRigidBody({
      position,
      rotation,
      // Add other physics properties as needed
    });

    return () => {
      world.removeRigidBody(carBody);
    };
  }, [position, rotation, world]);

  useFrame(() => {
    // Update car position and rotation based on controls
    if (meshRef.current) {
      meshRef.current.position.copy(carBody.translation());
      meshRef.current.rotation.setFromQuaternion(carBody.rotation());
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 0.5, 2]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default Car;