import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import customPalette from './ThemePalette'

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import LandingPage from "./pages/LandingPage"
import About from './pages/About';

import NavBar from './components/NavBar';
import Logo from './components/Logo';
import { FlexContainer } from './components/styles'
import Header from './components/Header';


const theme = createTheme({
  palette: customPalette,
});

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>

          <Routes>
            <Route path="/" element={<Grid container spacing={2}><Grid item xs={12}><Header /></Grid><Grid item xs={12}><LandingPage /></Grid></Grid>} />
            <Route path="/about-me" element={<Grid container spacing={2}><Grid item xs={12}><Header /></Grid><Grid item xs={12}><About /></Grid></Grid>} />

          </Routes>

        </Box>
      </ThemeProvider>
    </div>
  )
}

export default App
