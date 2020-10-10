import React, { useState } from 'react';
import Header from './components/Header'
import './App.scss';
import CardList from './components/CardList';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

function App() {
  const [inputValue, handleSearchInput] = useState('');

  // const handleSearchInput = (event) => {
  //   console.log('hi')
  //   console.log(event)
  // }
  function handleStatusChange(input) {
    handleSearchInput(input);
  }
  // const handleSearchInput = (event) =>  {
  //   console.log('App', event)
  // }
  
  return (
    <>
    <CssBaseline />
    <div className="App">
      <Grid container direction="column">
        <Grid item xs={12}>
          <Header onSearchInputChange={handleSearchInput}></Header>
        </Grid>
        <CardList></CardList>
      </Grid>
    </div>
    </>
  );
}

export default App;
