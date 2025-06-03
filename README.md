# MultiRoad
A 3D Multiplayer Racing Game

## Overview
MultiRoad is an immersive multiplayer racing game built with Next.js, React, and Three.js. The game features a modular racetrack system, allowing for dynamic track creation and customization. Players can compete in real-time using Socket.IO for networking and @react-three/rapier for physics.

## Features
- **3D Graphics**: Utilizes Three.js and React Three Fiber for stunning visuals.
- **Multiplayer Support**: Real-time racing with friends using Socket.IO.
- **Modular Racetrack System**: Create and customize tracks dynamically.
- **Physics Engine**: Realistic vehicle dynamics powered by @react-three/rapier.
- **User Interface**: Intuitive UI components for menus, leaderboards, and player interactions.

## Getting Started
To get started with MultiRoad, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd multiroad
npm install
```

### Running the Development Server
To run the development server, use the following command:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure
- **public/assets**: Contains game assets including models, textures, and sounds.
- **src/components**: Modular components for UI and game logic.
- **src/pages**: Next.js pages for routing and rendering.
- **src/hooks**: Custom hooks for managing game state and controls.
- **src/lib**: Utility functions for physics and socket management.
- **src/types**: TypeScript types and interfaces.
- **src/utils**: Helper functions for various tasks.
- **src/styles**: Global CSS styles.
- **src/server**: Socket.IO server setup for multiplayer functionality.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.