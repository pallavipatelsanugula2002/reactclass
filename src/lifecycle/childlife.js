// Childcard.js
import React from "react";
import "./stylechildcard.css"

const Childcard = ({ keyProp, message }) => {
  return (
    <div className="card">
      <div className="card-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Childcard;
