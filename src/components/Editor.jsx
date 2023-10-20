// Importing necessary modules and components
import { useState } from "react"; // React's useState hook for managing state
import "codemirror/lib/codemirror.css"; // Styles for CodeMirror editor
import "codemirror/theme/material.css"; // CodeMirror theme
import "codemirror/mode/xml/xml"; // XML mode for CodeMirror
import "codemirror/mode/javascript/javascript"; // JavaScript mode for CodeMirror
import "codemirror/mode/css/css"; // CSS mode for CodeMirror
import { Controlled as ControlledEditor } from "react-codemirror2"; // Controlled CodeMirror component
import { Box, Typography, Button, styled } from "@mui/material"; // Material-UI components
import { CloseFullscreen } from "@mui/icons-material"; // Material-UI icon
import "../App.css"; // Custom CSS

// Create a styled container component
const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;

// Create a styled header component
const Header = styled(Box)`
  display: flex;
  justify-content: space between;
  background: #060606;
  color: #aaaebc;
  font-weight: 700;
`;

// Create a styled heading component
const Heading = styled(Box)`
  background: #1d1e22;
  padding: 9px 12px;
  display: flex;
`;

// Define the Editor component
const Editor = ({ heading, language, value, onChange, icon, color }) => {
  const [open, setOpen] = useState(true); // State to control editor visibility

  // Function to handle changes in the CodeMirror editor
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              borderRadius: 5,
              marginRight: 5,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              color: "#000",
              paddingBottom: 2,
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreen
          fontSize="small"
          style={{ alignSelf: "center" }}
          onClick={() => setOpen((prevState) => !prevState)}
        />
      </Header>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="controlled-editor"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </Container>
  );
};

export default Editor; // Export the Editor component
