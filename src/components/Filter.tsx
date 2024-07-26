import React from "react";

const Filter = () => {
  const;
  return (
    <div>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      ></input>
    </div>
  );
};

export default Filter;
