import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

const BoxList = () => {
  const INITIAL_STATE = [
    // {
    //   id: uuid(),
    //   width: "",
    //   height: "",
    //   backgroundColor: "",
    // },
  ];
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const addBox = (newBox) => {
    setBoxes((oldBox) => [...oldBox, { ...newBox, id: uuid() }]);
  };
  const remove = (id) => {
    setBoxes((oldBox) => oldBox.filter((box) => box.id !== id));
  };
  return (
    <div className="BoxList">
      <h2>BoxList</h2>
      <NewBoxForm addBox={addBox} />
      <table>
        <tbody>
          <tr>
            {boxes.map((box) => (
              <Box
                key={box.id}
                data-testId={1}
                id={box.id}
                width={box.width}
                height={box.height}
                backgroundColor={box.backgroundColor}
                remove={remove}
              />
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BoxList;
