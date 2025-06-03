// This file exports TypeScript types and interfaces used throughout the project.

export interface Player {
    id: string;
    name: string;
    position: { x: number; y: number; z: number };
    score: number;
}

export interface GameState {
    players: Player[];
    track: TrackData;
    isGameActive: boolean;
}

export interface TrackData {
    id: string;
    segments: TrackSegment[];
}

export interface TrackSegment {
    id: string;
    length: number;
    curve: number; // Represents the curvature of the segment
}

export interface ControlInputs {
    forward: boolean;
    backward: boolean;
    left: boolean;
    right: boolean;
}