import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    if (item.trim()) {
      setItems([...items, item]);
      setItem(""); // Clear the input field after adding
    }
  };

  const deleteItem = (item) => {
    setItems(items.filter((i) => i !== item));
    console.log("deleted");
  };

  return (
    <div className="min-h-screen bg-gray-500 flex flex-col items-center py-10">
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">To-Do List</h1>

        <div className="flex space-x-3 mb-4">
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Add a new task..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={addItem}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-200 px-4 py-2 rounded-lg shadow-sm"
            >
              <span className="text-gray-800">{item}</span>
              <button
                onClick={() => deleteItem(item)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>

    
  );
}

export default App;
