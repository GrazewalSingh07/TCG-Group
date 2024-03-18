// import React, { useRef, useEffect } from 'react';
// import { Canvas, useThree, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three'
// const Scene = ({ walls, floor }) => {
//   const { scene } = useThree();

//   useEffect(() => {
//     // Clear previous geometries
//     while(scene.children.length > 0){ 
//       scene.remove(scene.children[0]); 
//     }

//     const material = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });

//     walls.forEach((wallArray) => {
//       wallArray.forEach((wall) => {
//         const shape = new THREE.Shape();
//         wall.forEach(([x, y], index) => {
//           if (index === 0) {
//             shape.moveTo(x / 100, -y / 100); // Adjust scale as needed
//           } else {
//             shape.lineTo(x / 100, -y / 100);
//           }
//         });

//         const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.2, bevelEnabled: false });
//         const mesh = new THREE.Mesh(geometry, material);
//         scene.add(mesh);
//       });
//     });
//   }, [walls, floor, scene]);

//   return null;
// };

// const FloorPlan3D = ({ walls, floor }) => (
    
//   <Canvas>
//     <ambientLight intensity={0.5} />
//     <pointLight position={[10, 10, 10]} />
//     <Scene walls={walls} floor={floor} />
//     {/* <mesh> */}
 
//     {/* </mesh> */}
//     <OrbitControls />
//   </Canvas>
// );

// export default FloorPlan3D;
