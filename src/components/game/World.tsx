import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Text } from '@react-three/drei'
import Car from './Car';
import Track from './Track';

const World: React.FC = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Text position={[0, 1, 0]} fontSize={1} color="white">
                3D Text
            </Text>
            <Physics>
                <Track />
                <Car />
            </Physics>
        </Canvas>
    );
};

export default World;