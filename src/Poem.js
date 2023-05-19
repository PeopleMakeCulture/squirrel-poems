import React from 'react';

const Poem = () => {

  let num_stanzas = 1

  const poems = [`
    tree branches
    walking
    White ring on short tail
`, `
    bringing green leaves to nest
    on fence
    Very far, so appx
`];

  return (
    <div className="Poem" style={{ whiteSpace: "pre-line"}}>
      {poems[1]}
    </div>
  );
};

export default Poem;