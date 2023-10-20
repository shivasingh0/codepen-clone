import { createContext, useState } from 'react'; // Import createContext and useState from React

// Create a new context called DataContext
export const DataContext = createContext(null);

// Define the DataProvider component
const DataProvider = ({ children }) => {

    // Initialize state variables for HTML, JS, and CSS code
    const [html, setHtml] = useState('');
    const [js, setJs] = useState('');
    const [css, setCss] = useState('');

    // Provide the state variables and setter functions through the DataContext
    return (
        <DataContext.Provider value={{
            html,
            setHtml,
            css,
            setCss,
            js,
            setJs
        }}>
            {children} {/* Render the child components */}
        </DataContext.Provider>
    )
}

export default DataProvider; // Export the DataProvider component
