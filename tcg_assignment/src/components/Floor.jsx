import { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three'
import texturePath from './floorimg.jpg'

export const Floor = ({ size  , position   }) => {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, texturePath)
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1,1);
  if (texture) {
    // Adjust the texture's repeat properties for the floor's size
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(size[0] / 2, size[1] / 2);
  }

  return (
    <mesh ref={meshRef} position={position} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
  <planeGeometry args={[...size, 32, 32]} />
  <meshStandardMaterial map={texture} />
</mesh>
  );
};
