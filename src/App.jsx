import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import GameResult from './components/GameResult';
import Rules from './components/Rules';
import UserChoice from './components/UserChoice';

const useStyles = makeStyles(theme => ({
  footer: {
    color: '#fff',
    fontWeight: 700,
    position: 'absolute',
    bottom: '1%',
    left: '50%',
    transform: 'translateX(-50%)',
    [theme.breakpoints.up(1280)]: {
      fontSize: '0.9rem'
    },
    [theme.breakpoints.up(1600)]: {
      fontSize: '1.3rem'
    }
  }
}));

function App() {

  const classes = useStyles();

  const [userChoice, setUserChoice] = useState('');
  const [comChoice, setComChoice] = useState('');
  const [matchCount, setMatchCount] = useState(0);
  const [counter, setCounter] = useState(3);

  return (
    <div>
      <UserChoice
        setUserChoice={setUserChoice}
        setComChoice={setComChoice}
        setMatchCount={setMatchCount}
        matchCount={matchCount}
        setCounter={setCounter} />
      <GameResult
        userChoice={userChoice}
        comChoice={comChoice}
        matchCount={matchCount}
        setUserChoice={setUserChoice}
        setComChoice={setComChoice}
        setMatchCount={setMatchCount}
        counter={counter}
        setCounter={setCounter} />
      <Rules />
      {userChoice === '' && <Typography className={classes.footer} variant='caption'>Made By Anjeryan.S.P</Typography>}
    </div>
  )
}

export default App
