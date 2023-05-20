import React, { useState } from 'react';
import squirrel_data from "./squirrel-data.json"

// TODO: create a way to "stash" a poem
const Poem = () => {

  let NUM_STANZAS = 3
  let ATTR_LIST = ['specific_location','other_activities','color_notes']

  const seed_poems = [`
        Tree branches
        Walking
        White ring on short tail
    `, `
        Bringing green leaves to nest
        On fence
        Very far, so appx
    `];

  const [poem, setPoem] = useState(seed_poems[Math.round(Math.random())]);

  const sample = (key) => {

    let idx = 0
    let line = ''
    
    while (!line){
      idx = squirrel_data.length * Math.random() << 0
      line = squirrel_data[idx][key]
    }

    return line
  }

  // TODO: other string manipulations
  const clean = (str) => {
    return str.replace(/^\w/, (match) => match.toUpperCase());;
  }

  // TODO: Randomly sample from arg list, so order changes
  // TODO: Make sure there are no repeats for > 1 stanza
  const generate_poem = (args, num_stanzas) => {

    let poem = ''

      for (let stanza = 0; stanza < num_stanzas; stanza++){
        for (const arg of args){
          poem += clean(sample(arg)) + '\n';
        }
        poem += '\n'
      }
    
    return poem
  }

  const handleClick = () => {
    setPoem((prevPoem) => generate_poem(ATTR_LIST, NUM_STANZAS));
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