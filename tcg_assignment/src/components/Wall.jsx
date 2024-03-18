import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Function to create walls from coordinates
export const createWallsFromCoords = (wallCoords) => {
  return wallCoords.map(([start, end], index) => {
    const startPos = new THREE.Vector3(...start);
    const endPos = new THREE.Vector3(...end);
    const length = startPos.distanceTo(endPos);
    const midPoint = new THREE.Vector3().addVectors(startPos, endPos).multiplyScalar(0.5);
    const angle = Math.atan2(endPos.z - startPos.z, endPos.x - startPos.x);

    return (
      <Box
        key={index}
        args={[length, 2.5, 0.1]} // Length, height, and depth of the wall
        position={[midPoint.x, 1.25, midPoint.z]} // Position the wall at the midpoint
        rotation={[0, angle, 0]} // Rotate the wall to align with the start and end points
      >
        <meshStandardMaterial attach="material" color="white" />
      </Box>
    );
  });
};
