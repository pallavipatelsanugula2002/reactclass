// Parent.js

import React from 'react';
import Table from './tablechild';

const Parent1 = () => {
  // Define data (rows) to pass to the Table component
  const tableData = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 28 }
  ];

  return (
    <div>
      <h2>Parent Component</h2>
      {/* Pass the tableData as a prop to the Table component */}
      <Table data={tableData} />
    </div>
  );
};

export default Parent1;
