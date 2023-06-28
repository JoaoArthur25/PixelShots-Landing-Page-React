import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './components/Home';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import History from './components/History';
import { darkTheme, lightTheme } from './styles/theme';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Menu theme={theme} toggleTheme={toggleTheme} />
        <Home />
        <History />
        <Gallery />
        <Pricing />
        <Contact />
      </>
    </ThemeProvider>
  );
};

createRoot(document.getElementById('root')).render(<App />);
