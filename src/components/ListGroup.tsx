function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <h1 className="text-red-400 text-3xl">List</h1>
      <ul className="w-96">
        {items.map((item) => (
          <li
            key={item}
            className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 text-lg"
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
