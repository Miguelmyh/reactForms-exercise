import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor: "",
  };
  const [formData, setForm] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((formData) => ({ ...formData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setForm(INITIAL_STATE);
  };

  const { width, height, backgroundColor } = formData;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Box's width: </label>
      <input
        id="width"
        type="text"
        name="width"
        placeholder="Type the width for a box"
        value={width}
        onChange={handleChange}
      />
      <label htmlFor="height">Box's height: </label>
      <input
        id="height"
        type="text"
        name="height"
        placeholder="Type the height for a box"
        value={height}
        onChange={handleChange}
      />
      <label htmlFor="backgroundColor">Box's color: </label>
      <input
        id="backgroundColor"
        type="text"
        name="backgroundColor"
        placeholder="Type the color for a box"
        value={backgroundColor}
        onChange={handleChange}
      />
      <button onSubmit={handleSubmit}>Add Box</button>
    </form>
  );
};

export default NewBoxForm;
