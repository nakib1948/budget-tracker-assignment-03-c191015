import { useContext } from "react";
import { EntriesContext } from "../context/EntriesContext";

export function useEntries() {
  const value = useContext(EntriesContext);
  return value;
}
