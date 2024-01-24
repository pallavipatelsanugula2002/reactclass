// Child.js

import React from 'react';

const Child = (props) => {
  console.log(props);
  // Receive the message from the Parent component through props
  const receivedMessage = props.message;
  

  return (
    <div>
      <h3>Child Component</h3>
      <p>Received Message: {receivedMessage}</p>
    </div>
  );
};

export default Child;
