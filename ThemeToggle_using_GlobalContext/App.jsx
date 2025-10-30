import React, { useContext  } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';

const ThemeComponent = () =>{
  const {theme, toggleTheme} = useContext(ThemeContext);
  
  const appStyle = {
    backgroundColor : theme === 'light'?'#fff':'#333',
    color: theme === 'light'? '#333' : '#fff',
  }
  
  return(
    <div style={appStyle}>
       <h1>{theme.toUpperCase()} MODE</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

const App = () => {

  return (
    <ThemeProvider>
      <ThemeComponent />
    </ThemeProvider>
  );
};

export default App;