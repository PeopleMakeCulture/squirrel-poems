import React, { useState } from 'react';
import squirrel_data from "./squirrel-data.json"

const Poem = () => {

  // let num_stanzas = 1;
  const poems = [`
        tree branches
        walking
        White ring on short tail
    `, `
        bringing green leaves to nest
        on fence
        Very far, so appx
    `];

  const [poem, setPoem] = useState(poems[1]);

  const test_poem = squirrel_data[0]['unique_squirrel_id'];


  function sample(key) {

    let idx = 0
    let line = ''
    
    while (!line){
      idx = squirrel_data.length * Math.random() << 0
      line = squirrel_data[idx][key]
    }

    return line
  }

  // TODO: other string manipulations
  function clean(str){
    return str.replace(/^\w/, (match) => match.toUpperCase());;

  }

  function generate_poem(){
    let poem = ''
      poem += clean(sample('specific_location')) + '\n'
      poem += clean(sample('other_activities')) + '\n'
      poem += clean(sample('color_notes')) + '\n'
    return poem
  }

  const handleClick = () => {
    console.log("Click")
    setPoem((prevPoem) => generate_poem());
  }

  return (
    <div>
      <div className="Poem" style={{ whiteSpace: "pre-line"}}>
        {poem}
      </div>
      <button className="Generate-button" onClick={handleClick}>
        Generate Poem
      </button>
    </div>
  );
};

export default Poem;