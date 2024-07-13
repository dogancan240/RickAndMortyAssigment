import React from "react";

const FilterBTN = ({ name, index, items, task, updatePageNumber }) => {
  return (
    <div>
      <style jsx>
        {`
          .myinput:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          onClick={() => {
            updatePageNumber(1);
            task(items);
          }}
          className="form-check-input myinput"
          type="radio"
          name={name}
          id={`${name}-${index}`}
          // example: Status-1
          // Status-2
        />
        <label className="btn btn-outline-primary" for={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
