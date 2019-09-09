import React from 'react';
import usStates from './us-map-data.js';
import { flags } from './USFlags';
import './USMap.css';

function  pickRandomFlags(correct) {
  // Choose five random states.
  let _ndx = Array(50).fill().map((_, i) => i);
  let ids = [];
  for (let i = 0; i < 5; i++) {
    let ndxNdx = Math.floor(Math.random() * _ndx.length);
    let stateIndex = _ndx[ndxNdx];
    ids.push(usStates[stateIndex].id.toLowerCase());
    _ndx.splice(ndxNdx, 1);
  }
  if (ids.indexOf(correct.toLowerCase()) === -1) {
    let correctNdx = Math.floor(Math.random() * 5);
    ids[correctNdx] = correct.toLowerCase();
  }
  return ids;
}

function USMap(props) {
  const { setid, processCorrect, width } = props;
  const height = width * 5/8;

  let stateNdx = Math.floor(Math.random() * usStates.length);
  let stateId = usStates[stateNdx].id;
  const multipleChoice = pickRandomFlags(stateId);
        console.log('USMap new stateId', stateId);
        console.log('multiple choice', multipleChoice);
  setid(stateId);

  const handleFlagClick = e => {
    let el = e.currentTarget;
    let flag = el.dataset.flag;
    console.log('clicked flag for', flag);
    if (flag === stateId.toLowerCase()) {
      processCorrect(stateId);
    }

  }

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
        {multipleChoice.map(st => {
          return <img data-flag={st} onClick={handleFlagClick} src={flags[st]} style={{flex: 1, width: "20%", height: "20%" }}/>
        })}
      </div>
    </div>
  );
}

export default USMap;
