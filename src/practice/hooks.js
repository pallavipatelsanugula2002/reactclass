import React, { useState } from 'react';

function InputForm() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}
export default InputForm;