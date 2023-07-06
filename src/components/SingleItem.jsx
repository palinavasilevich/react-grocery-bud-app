const SingleItem = ({ item, removeItem, editItem }) => {
  const { id, text, completed } = item;

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: completed && "line-through",
        }}
      >
        {text}
      </p>
      <button className="btn remove-btn" onClick={() => removeItem(id)}>
        delete
      </button>
    </div>
  );
};

export default SingleItem;
