import React, { useState } from 'react';
import USMap from './USMap';
import './App.css';

function App() {
  let [ correctFlag, setCorrectFlag ] = useState('');
  var selectedId = null;

  function setSelectedId(id) {
    selectedId = id;
    console.log('setSelectedId', id);
  }

  const handleIdInput = e => {
    let val = e.target.value;
    console.log('input', val);
    if (val === selectedId) {
      setCorrectFlag(val);
    }
  }

  return (
    <div className="App">
      <div style={{display: "flex", width: "800px"}}>
        <USMap setid={setSelectedId} />
        <div style={{width: "150px", backgroundColor: "gray"}}>
          <input name="abbr" onBlur={handleIdInput} style={{width: "100px"}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
