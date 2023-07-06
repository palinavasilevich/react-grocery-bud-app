import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addNewItem }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      toast.error("please provide value");
      return;
    }

    addNewItem(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
