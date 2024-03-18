import { Box } from "@react-three/drei";
import * as THREE from 'three'
 

export const createWallsWithWindow = (wallCoords ,texture, windowWallIndex = 0, windowSpecs = {width: 2, height: 1.5, offset: 1}) => {

    
    return wallCoords.flatMap(([start, end], index) => {
      const startPos = new THREE.Vector3(...start);
      const endPos = new THREE.Vector3(...end);
      const length = startPos.distanceTo(endPos);
      const midPoint = new THREE.Vector3().addVectors(startPos, endPos).multiplyScalar(0.5);
      const angle = Math.atan2(endPos.z - startPos.z, endPos.x - startPos.x);
  
      if (index === windowWallIndex) {
       
        return [
          
          <Box  castShadow
          receiveShadow key={`${index}-1`} args={[windowSpecs.offset, 2.5, 0.1]} position={[startPos.x + windowSpecs.offset/2, 1.25, startPos.z]} rotation={[0, angle, 0]}>
            <meshStandardMaterial color="#8fa5b6" 
    transparent  
    opacity={0.5} 
    roughness={0}  
    metalness={0.1}  />
          </Box>,
          
          <Box castShadow
          receiveShadow key={`${index}-2`} args={[length - windowSpecs.offset - windowSpecs.width, 2.5, 0.1]} position={[endPos.x - (length - windowSpecs.offset - windowSpecs.width)/2, 1.25, endPos.z]} rotation={[0, angle, 0]}>
            <meshStandardMaterial color="#8fa5b6" 
    transparent 
    opacity={0.5}  
    roughness={0} 
    metalness={0.1}  />
          </Box>,
           
        ];
      }
   
      return (
        <Box key={index} args={[length, 2.5, 0.1]} position={[midPoint.x, 1.25, midPoint.z]} rotation={[0, angle, 0]}>
          <meshStandardMaterial attach="material" color="red" />
        </Box>
      );
    });
  };
  