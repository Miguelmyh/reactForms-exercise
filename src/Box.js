import React from "react";

const Box = (props) => {
  return (
    <td>
      <div
        className="Box"
        style={{
          height: `${props.height}vh`,
          width: `${props.width}vh`,
          backgroundColor: props.backgroundColor,
        }}>
        <button onClick={() => props.remove(props.id)}>X</button>
      </div>
    </td>
  );
};

export default Box;
