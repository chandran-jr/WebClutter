import React, { useState } from "react";
import VennDiagram from './VennDiagram';
import './App.css';


function App() {

  const [aVal, setaVal] = useState(18);
  const [bVal, setbVal] = useState(17);
  const [abVal, setabVal] = useState(4);
  const [outVal, setoutVal] = useState(19);

  return (

    <div className="app">

      <div className="inputTable">

      <div className="input">
      <h3>A: </h3>
      <input onChange={(e) => setaVal(e.target.value)} value={aVal} placeholder="Enter value for A" type="number"/>
      </div>

      <div className="input">
      <h3>B: </h3>
      <input onChange={(e) => setbVal(e.target.value)} value={bVal} placeholder="Enter value for B" type="number"/>
      </div>

      <div className="input">
      <h3>A&B : </h3>
      <input onChange={(e) => setabVal(e.target.value)} value={abVal} placeholder="Enter value for A intersection B" type="number"/>
      </div>

      <div className="input">
      <h3>None: </h3>
      <input onChange={(e) => setoutVal(e.target.value)} value={outVal} placeholder="Enter the outside value " type="number"/>
      </div>

      </div>

        <div className="venndiag">
          <VennDiagram 
            aVal={aVal}
            bVal={bVal}
            abVal={abVal}
            outVal={outVal}
          />
        </div>

    </div>

  );
};

export default App;