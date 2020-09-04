import React, { Component } from "react";
import { Grid, Typography, Paper, Divider } from "@material-ui/core";
import {generateRandomNumber} from "../util"
import MyForm from "./MyForm";
import Progress from "./Progress"

export class Mainapp extends Component {

constructor(props) {
  super(props)

  this.state = {
     generatedNumber:generateRandomNumber(),
     guess:undefined,
     allGuesses:[],
     attempt:0,
  }
}

  updateAppState=(guess)=>{


console.log(guess)
const generatedNumber= generateRandomNumber();
const absDiff = Math.abs(guess- this.state.generatedNumber)

this.setState(prevState=>({
  guess:guess,
  allGuesses:[...prevState.allGuesses,{ guess } ],
  attempt:prevState.attempt+1,
}))


  }
  render() {
const {allGuesses,attempt} =this.state
    const guessList = allGuesses.map((item,index)=>(
      <li key={index}>
        <span>{item.guess}</span>
      </li>
    ));
    return (
      
        <Grid
          container
          style={{ height: "100vh" }}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Paper style={{ padding: "50px" }} elevation={6}>
              <Typography align="center" variant="h2" gutterBottom>
                Hot Or Cold
              </Typography>
              <Divider style={{ margin: "20px 0" }}/>
              <MyForm returnGuessToApp={guess=>this.updateAppState(guess)}></MyForm>
              <Progress attempt={attempt} guessList={guessList} ></Progress>
            </Paper>
          </Grid>
        </Grid>
      
    );
  }
}

export default Mainapp;
