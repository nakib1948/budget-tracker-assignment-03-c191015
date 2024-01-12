import AddEntry from "./components/AddEntry";
import Header from "./components/Header";
import Listing from "./components/Listing";
import { EntriesProvider } from "./context/EntriesContext";

function App() {
  return (
    <EntriesProvider>
      <Header />
      <AddEntry />
      <Listing />
    </EntriesProvider>
  );
}

export default App;
