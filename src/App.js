// Import necessary components and context
import Home from "./components/Home"; // The Home component
import DataProvider from "./context/DataProvider"; // The DataProvider context provider

// Define the main App component
function App() {
  return (
    <DataProvider>
      <Home /> {/* Render the Home component wrapped with the DataProvider */}
    </DataProvider>
  );
}

export default App; // Export the App component
