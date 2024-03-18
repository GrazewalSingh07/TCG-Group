import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { createWallsFromCoords } from "./Wall";
import { createWallsWithWindow } from "./wallWindow";
import { TextureLoader } from "three";
import image from './maxresdefault.jpg'
import * as THREE from 'three'
import { Floor } from "./Floor";
import { Model } from "./Model";
import couch from '../assets/Couch.glb'
import table from "../assets/Table.glb"
import cupboard from "../assets/wooden_cupboard_with_door.glb"
import bed from "../assets/messy_bed.glb"
import { Bulb } from "./Bulb";
import { useEffect, useRef } from "react";
const Room = () => {
  const wallsCoordinates = [
 
    [[0, 0, 0], [5, 0, 0]],  
    [[5, 0, 0], [5, 0, 5]],  
    [[5, 0, 5], [0, 0, 5]], 
    [[0, 0, 5], [0, 0, 0]], 

  ];
  const lightRef = useRef();

useEffect(() => {
  if (lightRef.current) {
    lightRef.current.shadow.camera.near = 0.5;
    lightRef.current.shadow.camera.far = 500;
    lightRef.current.shadow.camera.left = -50;
    lightRef.current.shadow.camera.right = 50;
    lightRef.current.shadow.camera.top = 50;
    lightRef.current.shadow.camera.bottom = -50;
    lightRef.current.shadow.bias = -0.0001; // Adjusting bias to reduce shadow acne
  }
}, []);
  const texture = useLoader(TextureLoader, image);
  const walls = createWallsWithWindow(wallsCoordinates,texture);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1,1);

  return (
    <Canvas  gl={{
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    }} shadows  camera={{ position: [5, 5, 5], fov: 60 }}>
       
<directionalLight
ref={lightRef}
  position={[10, 10, 10]}
  intensity={1}
  castShadow
  shadow-mapSize-width={2048} // Adjust for better shadow resolution
  shadow-mapSize-height={2048}
  shadow-camera-far={50}
  shadow-camera-left={-10}
  shadow-camera-right={10}
  shadow-camera-top={10}
  shadow-camera-bottom={-10}
/>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {walls}
      <Floor texture={texture} size={[7, 7]} position={[2.5, 0, 2.5]} />
       
       <Model modelPath={bed}   rotation={[0, Math.PI, 0]} position={[2.5,0,3.9]}  />
       <Model modelPath={cupboard} scale={1.5} rotation={[0, Math.PI/2, 0]} position={[.3,0,2]}  />
       <Bulb position={[2, 3, 0]} color="#ffaa33" intensity={10} />
      <Bulb position={[-2, 3, 0]} color="white" intensity={1.2} />
      <OrbitControls />
    </Canvas>
  );
};

export default Room;
