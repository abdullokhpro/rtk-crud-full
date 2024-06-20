import React, { memo, useMemo } from "react";

const LocalImage = ({ files }) => {
  return (
    <div>
      {Object.values(files).map((el, inx) => (
        <img src={URL.createObjectURL(el)} width={100} key={inx} alt="" />
      ))}
    </div>
  );
};

export default memo(LocalImage);
