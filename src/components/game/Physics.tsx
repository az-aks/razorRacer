import { useEffect } from 'react';
import { Physics as RapierPhysics } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';

const Physics = ({ children }) => {
  useEffect(() => {
    // Initialize any physics-related settings here if needed
  }, []);

  useFrame(() => {
    // Update physics world if necessary
  });

  return (
    <RapierPhysics>
      {children}
    </RapierPhysics>
  );
};

export default Physics;