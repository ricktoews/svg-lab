import React from 'react';
import usStates from './us-map-data.js';
import './USMap.css';

function USMap(props) {
  const { setid } = props;

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
      <div style={{ width: "320px", height: "200px"}}>
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
      </div>
  );
}

export default USMap;
