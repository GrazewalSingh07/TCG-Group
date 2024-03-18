import { useGLTF } from '@react-three/drei';

export function Model({ modelPath, ...props }) {
    const { scene } = useGLTF(modelPath);

    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        
      }
    });
  
    return (
      <primitive 
        object={scene} 
        
        {...props} 
      />
    );
}
