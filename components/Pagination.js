import React from "react";

const Pagination = (props) => {
  console.log(props);
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div className="pagination">
      <button onClick={onLeftClick}>
        <div>
          <span role="img" aria-label="left">
            ⬅
          </span>
        </div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onclick={onRightClick}>
        <div>
          <span role="img" aria-label="right">
            ➡
          </span>
        </div>
      </button>
    </div>
  );
};

export default Pagination;
