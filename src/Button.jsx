import React from 'react';

const Button = () => {

  const handleClick = () => {
    console.log('Button clicked!');
    // Add your custom logic here for the button click event
  };

  return (
    <button className="Generate-button" onClick={handleClick}>
      Generate Poem
    </button>
  );

};

export default Button;