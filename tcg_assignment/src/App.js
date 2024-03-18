// App.js
import React from 'react';
import FloorPlan from './components/Room';
 import "./App.css"
import FloorPlan3D from './components/Floor3D';
 import data from "./components/data.json"
const App = () => {
 

  return (
    <div>
      
      <FloorPlan />
      {/* <FloorPlan3D walls={data.walls} floor={data.floor}/> */}
    </div>
  );
};

export default App;
