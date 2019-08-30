import React from 'react';
import usStates from './us-map-data.js';
import './App.css';

function App() {
  const style = {fill:"#d3d3d3",stroke:"#ffffff",strokeOpacity:1,strokeWidth:0.75,strokeMiterlimit:4,strokeDasharray:"none"};

  const unHighlightState = e => {
    let target = e.target;
    target.setAttribute("style", "fill: rgb(211, 211, 211)");
    e.stopPropagation();
  }
  
  const highlightState = e => {
    let currentTarget = e.currentTarget;
    let target = e.target;
    target.setAttribute("style", "fill: green");
    console.log('highlightState', target.id);
    e.stopPropagation();
  }
  
  return (
    <div className="App">
      <svg
         onMouseOver={highlightState}
         onMouseOut={unHighlightState}
         xmlns="http://www.w3.org/2000/svg"
         width="959"
         height="593"
         id="us-map">
         {usStates.map(st => <path style={style} id={st.id} d={st.d} />)}
      </svg>
    </div>
  );
}

export default App;
