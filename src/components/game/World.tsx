import React from 'react';
import { Text } from '@react-three/drei';
import Car from './Car';
import Track from './Track';

// MAKE SURE there's no Canvas import here!

const World: React.FC = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Text position={[0, 1, 0]} fontSize={1} color="white">
                3D Text
            </Text>
            <Track />
            <Car />
        </>
    );
};

export default World;