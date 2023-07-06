import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";

import Form from "./components/Form";
import Items from "./components/Items";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const initialList = JSON.parse(localStorage.getItem("list") || "[]");

const App = () => {
  const [items, setItems] = useState(initialList);

  const editItem = (itemId) => {
    const editedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setItems(editedItems);
    setLocalStorage(editedItems);
  };

  const addNewItem = (newItemText) => {
    const newItem = {
      id: nanoid(),
      text: newItemText,
      completed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item added to the list");
  };

  const removeItem = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
    setLocalStorage(filteredItems);
    toast.success("item deleted");
  };

  return (
    <main>
      <section className="section-center">
        <Form addNewItem={addNewItem} />
        <Items items={items} removeItem={removeItem} editItem={editItem} />
        <ToastContainer position="top-center" />
      </section>
    </main>
  );
};

export default App;
