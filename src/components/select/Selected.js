import { useRef, useState } from "react";

const Selected = ({ options, setOptions }) => {
  let rafi = useRef();
  const remove = () => {
    let theOptions = options.filter((op) => op !== rafi.current.value);
    setOptions(theOptions);
  };

  return (
    <div>
      <select
        className="input"
        onClick={remove}
        ref={rafi}
        size="3"
        multiple
        // style={{ direction: "ltr", width: "100%" }}
      >
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Selected;
