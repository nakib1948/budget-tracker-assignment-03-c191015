import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useEntries } from "../hooks/useEntries";

export default function AddEntry() {
  const { entries, setEntries } = useEntries();

  const [type, setType] = useState("income");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  return (
    <div className="border-b bg-gray-100 py-3">
      <div className="mx-auto max-w-xl px-5">
        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submitted");
            setEntries([
              ...entries,
              {
                id: uuidv4(),
                title: title,
                value: parseFloat(value),
                type: type,
              },
            ]);
          }}
        >
          <select
            id="type"
            name="type"
            className="block w-20 shrink-0 rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="income">+</option>
            <option value="expense">-</option>
          </select>

          <input
            type="text"
            name="title"
            autoComplete="off"
            className="block flex-1 rounded-md border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Add title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <input
            type="number"
            name="value"
            id="value"
            autoComplete="off"
            className="block w-20 rounded-md border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Value"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />

          <button
            id="add-expense-button"
            type="submit"
            className="flex w-9 shrink-0 basis-9 items-center justify-center rounded-md border border-indigo-200 bg-indigo-100 text-indigo-600 shadow-sm hover:bg-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
