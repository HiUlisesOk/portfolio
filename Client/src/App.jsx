import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import avatarIMG from "./images/PROFILE_IMAGE_CODE2.png"

import Avatar from '@mui/material/Avatar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CssBaseline />
      <Avatar alt="Ulises Esquivel" sx={{ width: 250, height: 250 }} src={avatarIMG} />
    </div>
  )
}

export default App
