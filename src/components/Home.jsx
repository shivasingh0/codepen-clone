// Import necessary components
import Code from "./Code"; // The Code component
import Result from "./Result"; // The Result component
import Header from "./Header"; // The Header component

// Define the Home component
const Home = () => {
  return (
    <>
      {/* Render the Header component at the top of the page */}
      <Header />
      {/* Render the Code component for code editing */}
      <Code />
      {/* Render the Result component for displaying the result */}
      <Result />
    </>
  );
};

export default Home; // Export the Home component
