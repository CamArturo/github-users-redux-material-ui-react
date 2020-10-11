import React, { useState } from 'react';
import Header from './components/Header'
import './App.scss';
import CardList from './components/CardList';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
const axios = require('axios');

function App() {
  const [inputValue, handleSearchInput] = useState('');
  let [users, addUser] = useState([]);

  function updateUsers (userData) {
    addUser([...users, userData])
  }

  async function getUser() {
    try {
      const response = await axios.get(`https://api.github.com/users/${inputValue}`);
      updateUsers(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <>
    <CssBaseline />
    <div className="App">
      <Grid container direction="column">
        <Grid item xs={12}>
          <Header onSearchInputChange={handleSearchInput} getUser={getUser}></Header>
        </Grid>
        
        <CardList users={users}></CardList>
      </Grid>
    </div>
    </>
  );
}

export default App;
