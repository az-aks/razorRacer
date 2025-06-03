import { useEffect, useState } from 'react';

const useControls = () => {
    const [controls, setControls] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false,
        boost: false,
    });

    const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
            case 'ArrowUp':
            case 'w':
                setControls((prev) => ({ ...prev, forward: true }));
                break;
            case 'ArrowDown':
            case 's':
                setControls((prev) => ({ ...prev, backward: true }));
                break;
            case 'ArrowLeft':
            case 'a':
                setControls((prev) => ({ ...prev, left: true }));
                break;
            case 'ArrowRight':
            case 'd':
                setControls((prev) => ({ ...prev, right: true }));
                break;
            case 'Shift':
                setControls((prev) => ({ ...prev, boost: true }));
                break;
            default:
                break;
        }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
        switch (event.key) {
            case 'ArrowUp':
            case 'w':
                setControls((prev) => ({ ...prev, forward: false }));
                break;
            case 'ArrowDown':
            case 's':
                setControls((prev) => ({ ...prev, backward: false }));
                break;
            case 'ArrowLeft':
            case 'a':
                setControls((prev) => ({ ...prev, left: false }));
                break;
            case 'ArrowRight':
            case 'd':
                setControls((prev) => ({ ...prev, right: false }));
                break;
            case 'Shift':
                setControls((prev) => ({ ...prev, boost: false }));
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return controls;
};

export default useControls;