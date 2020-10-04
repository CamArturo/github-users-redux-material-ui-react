import React from 'react';
import Header from './components/Header'
import './App.scss';
import CardList from './components/CardList';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <>
    <CssBaseline />
    <div className="App">
      <Grid container direction="column">
        <Grid item xs={12}>
          <Header></Header>
        </Grid>
        <CardList></CardList>
      </Grid>
    </div>
    </>
  );
}

export default App;
