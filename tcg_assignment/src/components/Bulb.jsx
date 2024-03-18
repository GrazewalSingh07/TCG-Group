 

export function Bulb({ position, color = 'white', intensity = 1 }) {
  return (
    <pointLight castShadow position={position} color={color} intensity={intensity}  />
  );
}
