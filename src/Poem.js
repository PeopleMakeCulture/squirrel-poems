import React, { useState } from 'react';
import axios from 'axios';

const Poem = () => {

  const poems = [`
        tree branches
        walking
        White ring on short tail
    `, `
        bringing green leaves to nest
        on fence
        Very far, so appx
    `];

  // let num_stanzas = 1;
  
  const [poemIdx, setPoemIdx] = useState(0);

  const handleClick = () => {
    setPoemIdx((prevIndex) => (prevIndex + 1) % poems.length);
  }

  return (
    <div>
    <div className="Poem" style={{ whiteSpace: "pre-line"}}>
      {poems[poemIdx]}
    </div>
    <button className="Generate-button" onClick={handleClick}>
      Generate Poem
    </button>
    </div>
  );
};

export default Poem;