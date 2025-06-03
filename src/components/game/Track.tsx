import React from 'react';

const Track = () => {
    return (
        // The <group> will be part of the parent's <Canvas> and <Physics> context
        <group>
            {/* Track segments here */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                <planeGeometry args={[50, 50]} />
                <meshStandardMaterial color="#1a5c1a" />
            </mesh>
            {/* Add track segments here */}
        </group>
    );
};

export default Track; // Ensure only the Track component is exported