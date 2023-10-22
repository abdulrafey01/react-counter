import React from "react";

export default function Counter({ counter, onIncrement, onDelete }) {
  let classes = "badge m-2 badge-";
  classes += counter.value === 0 ? "warning" : "primary";

  const formatCount = () => {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  };
  return (
    <div className="d-block">
      <span className={classes}>{formatCount()}</span>
      <button
        onClick={() => onIncrement(counter)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => onDelete(counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </div>
  );
}
