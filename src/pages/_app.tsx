import { AppProps } from 'next/app';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Canvas>
      <Physics>
        <Component {...pageProps} />
      </Physics>
    </Canvas>
  );
}

export default MyApp;