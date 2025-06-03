// This file contains helper functions for various game-related tasks.

export const calculateDistance = (pointA: { x: number; y: number; z: number }, pointB: { x: number; y: number; z: number }): number => {
    const dx = pointB.x - pointA.x;
    const dy = pointB.y - pointA.y;
    const dz = pointB.z - pointA.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
};

export const lerp = (start: number, end: number, t: number): number => {
    return start + (end - start) * t;
};

export const clamp = (value: number, min: number, max: number): number => {
    return Math.max(min, Math.min(max, value));
};

export const randomRange = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
};