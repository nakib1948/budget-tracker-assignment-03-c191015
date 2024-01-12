import { createContext, useEffect, useState } from "react";
export const EntriesContext = createContext();

export function EntriesProvider({ children }) {
  const [entries, setEntries] = useState(function () {
    const value = localStorage.getItem("entries");
    if (!value) return [];
    return JSON.parse(value);
  });

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const totalIncome = entries
    .filter((entry) => entry.type === "income")
    .reduce((prev, entry) => prev + entry.value, 0);

  const totalExpense = entries
    .filter((entry) => entry.type === "expense")
    .reduce((prev, entry) => prev + entry.value, 0);

  const deleteEntry = (id) => {
    setEntries(entries.filter((item) => item.id !== id));
  };

  const editEntry = (id) => {
    const value = prompt();
    setEntries(
      entries.filter((item) => {
        if (item.id === id) {
          item.value = Number(value);
        }
        return item;
      })
    );
    // console.log(typeof( Number(value)))
  };

  const availableBudget = (totalIncome - totalExpense)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");

  return (
    <EntriesContext.Provider
      value={{
        entries,
        setEntries,
        totalIncome,
        totalExpense,
        availableBudget,
        deleteEntry,
        editEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
}
