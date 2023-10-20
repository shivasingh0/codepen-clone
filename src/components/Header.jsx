import { AppBar, Toolbar, styled } from "@mui/material"; // Import AppBar, Toolbar, and styled components from Material-UI

// Create a styled AppBar component
const Container = styled(AppBar)`
  background: #060606;
  position: static;
  border-bottom: 1px solid #2f2f2f;
  height: 9vh;
`;

// Define the Header component
const Header = () => {
  // Define a logo image URL
  const logo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIfdnqDO16NE1KjoEe0Fn2DBOCYfJXUXCctkHCMuszQqcSU2EuUDlB3Lc1OMnMNYzzUM&usqp=CAU";
  return (
    <Container>
      <Toolbar>
        <img src={logo} alt="logo" style={{ width: 40 }} />
      </Toolbar>
    </Container>
  );
};

export default Header; // Export the Header component
