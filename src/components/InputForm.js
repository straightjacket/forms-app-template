import React, { state, setState, useState } from "react";
import ReactDOM from "react-dom/client";

function InputForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was:`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter name of bank:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<InputForm />);
export default InputForm;
