import './App.css';
import {AppBar , Toolbar, Typography } from '@mui/material';
import Carlist from './Components/Carlist';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            CarShop
          </Typography>
        </Toolbar>
      </AppBar>
      <Carlist />
    </div>
  );
}

export default App;
