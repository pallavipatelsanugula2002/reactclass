// Table.js

import React from 'react';

const Table = (props) => {
  // Receive the data (rows) from the Parent component through props
  const tableData = props.data;

  return (
    <div>
      <h3>Table Component</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {/* Render each row in the table manually without using map */}
          {tableData.length > 0 && (
            <tr key={tableData[0].id}>
              <td>{tableData[0].id}</td>
              <td>{tableData[0].name}</td>
              <td>{tableData[0].age}</td>
            </tr>
          )}

          {tableData.length > 1 && (
            <tr key={tableData[1].id}>
              <td>{tableData[1].id}</td>
              <td>{tableData[1].name}</td>
              <td>{tableData[1].age}</td>
            </tr>
          )}

          {tableData.length > 2 && (
            <tr key={tableData[2].id}>
              <td>{tableData[2].id}</td>
              <td>{tableData[2].name}</td>
              <td>{tableData[2].age}</td>
            </tr>
          )}

          {/* Add more rows manually as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
