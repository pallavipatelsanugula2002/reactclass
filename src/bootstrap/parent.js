// Parent.js

import React from 'react';
import Child from './child';

const Parent = () => {
  // Define a message to pass to the Child component
  const messageToChild = "Hello from Parent!";

  return (
    <div>
      <h2>Parent Component</h2>
      {/* Pass the message as a prop to the Child component */}
      <Child message={messageToChild} />
    </div>
  );
};

export default Parent;
