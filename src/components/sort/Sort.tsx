import React from "react";
import SortForTypes from "./SortForTypes";
import SortAmount from "./SortAAmount";

const Sort = () => (
  <div className="flex justify-between items-center px-2">
    <SortForTypes />
    <SortAmount />
  </div>
);

export default Sort;
