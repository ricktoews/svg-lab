import React from 'react';
import usStates from './us-map-data.js';
import { flags } from './USFlags';
import './USMap.css';

function USMap(props) {
  const { setid, width } = props;
  const height = width * 5/8;
  const flagCodes = usStates.map(s => s.id.toLowerCase());

  let stateNdx = Math.floor(Math.random() * usStates.length);
  let stateId = usStates[stateNdx].id;
        console.log('USMap new stateId', stateId);
  setid(stateId);

  const unHighlightState = e => {
    let target = e.target;
    target.classList.remove('highlight');
    e.stopPropagation();
  }
  
  const highlightState = e => {
    let target = e.target;
    target.classList.add('highlight');
    e.stopPropagation();
  }
  
  return (
    <div style={{ width, height, backgroundColor: "#dfdfdf" }}>
      <svg
         onMouseOver={highlightState}
         onMouseOut={unHighlightState}
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 959 593"
         id="us-map">
         {usStates.map(st => {
            let classes = 'path';
            if (st.id === stateId) classes += ' selected';
            return <path key={st.id} className={classes} id={st.id} d={st.d} />
         })}
      </svg>
      <div className="flags" style={{display:"flex", flexWrap: "wrap", width }}>
        {flagCodes.map(st => {
          return <img src={flags[st]} style={{flex: 1, width: "20%", height: "20%" }}/>
        })}
      </div>
    </div>
  );
}

export default USMap;
