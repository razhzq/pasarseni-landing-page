
import './App.css';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './themes'
import Navbar from './components/Navbar';
import Scenery from './static/scenery.jpg'
import NFTCard from './components/NFTCard';

const StyledApp = styled.div`
    color: ${(props) => props.theme.fontColor }
`


function App() {

  const [theme, setTheme] = useState("light");

  const themeThoggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="App">
        <Navbar />
        <div className="content">
          
        </div>
    </div>
  );
}

export default App;
