import { useState, useEffect, useContext } from "react"; // Import necessary hooks and components
import { DataContext } from "../context/DataProvider"; // Import the DataContext from the context provider
import { Box, styled } from "@mui/material"; // Import Box and styled components from Material-UI

// Create a styled container component
const Container = styled(Box)`
  height: 41vh;
`;

// Define the Result component
const Result = () => {
  const [src, setSrc] = useState(""); // State to store the source code for the iframe
  const { html, css, js } = useContext(DataContext); // Access HTML, CSS, and JS code from the DataContext

  // Generate the source code for the iframe by combining HTML, CSS, and JS
  const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `;

  // Use an effect to update the iframe source when HTML, CSS, or JS code changes
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 250);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Container style={html || css || js ? null : { background: "#444857" }}>
      <iframe
        srcDoc={src} // Set the iframe source document
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Result; // Export the Result component
