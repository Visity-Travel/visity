import React from 'react';
import * as mt from '@material-ui/core'
import './App.css';

function App() {
  return (
    <div class="App">
      <mt.Typography variant="h2">Visity</mt.Typography>
      <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
        <mt.Card style={{ width: "70%", display: "flex", justifyContent: "center" }}>
          <mt.CardContent style={{ display: "flex", justifyContent: "center", width: "100%"}}>
            <mt.TextField placeholder="enter location" style={{width:"100%"}}></mt.TextField>
          </mt.CardContent>
          <mt.CardActions><mt.Button>search</mt.Button></mt.CardActions>
        </mt.Card>
      </div>
    </div>
  );
}

export default App;
