import { useContext } from "react"; // Import the useContext hook from React

// Import the Editor component from the 'Editor.js' file
import Editor from "./Editor";

import { Box, styled } from "@mui/material"; // Import Box and styled components from Material-UI

// Import the DataContext from the 'DataProvider.js' context
import { DataContext } from "../context/DataProvider";

// Create a styled container component
const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
`;

// Define the Code component
const Code = () => {
  // Access data and setter functions from the DataContext using useContext
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

  return (
    <Container>
      {/* Create an HTML editor using the Editor component */}
      <Editor
        language="xml"
        heading="HTML"
        value={html}
        onChange={setHtml}
        icon="/"
        color="#FF3C41"
      />
      {/* Create a CSS editor using the Editor component */}
      <Editor
        language="css"
        heading="CSS"
        value={css}
        onChange={setCss}
        icon="*"
        color="#0EBEFF"
      />
      {/* Create a JavaScript editor using the Editor component */}
      <Editor
        language="javascript"
        heading="JS"
        value={js}
        onChange={setJs}
        icon="( )"
        color="#FCD000"
      />
    </Container>
  );
};

export default Code; // Export the Code component
