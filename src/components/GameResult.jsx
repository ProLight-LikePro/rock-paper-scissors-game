import React, { useEffect, useState } from 'react';
import Score from './Score';
import { IconButton, makeStyles, Typography } from '@material-ui/core';

import rock from '../img/rock.png';
import paper from '../img/paper.png';
import scissor from '../img/scissor.png';

import ReplayIcon from '@material-ui/icons/Replay';

const images = [rock, paper, scissor];

const useStyles = makeStyles(theme => ({
    userImg: {
        width: theme.spacing(15),
        position: 'absolute',
        bottom: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
        [theme.breakpoints.up(1600)]: {
            width: theme.spacing(30),
        }
    },
    comImg: {
        width: theme.spacing(15),
        position: 'absolute',
        top: '5%',
        left: '50%',
        transform: 'translateX(-50%) rotate(180deg)',
        [theme.breakpoints.up(1600)]: {
            width: theme.spacing(30),
        }
    },
    result: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#fff',
        [theme.breakpoints.up(375)]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.up(1024)]: {
            fontSize: '3rem',
        },
        [theme.breakpoints.up(1600)]: {
            fontSize: '4rem',
        }
    },
    restart: {
        color: '#fff',
        position: 'absolute',
        bottom: '2%',
        left: '2%',
        [theme.breakpoints.up(1600)]: {
            transform: 'scale(2)',
            bottom: '5%',
            left: '3%',
        }
    }
}));

const GameResult = ({
    userChoice,
    comChoice,
    matchCount,
    setUserChoice,
    setComChoice,
    setMatchCount,
    counter,
    setCounter
}) => {

    const classes = useStyles();

    const [result, setResult] = useState('');
    const [userScore, setUserScore] = useState(0);
    const [comScore, setComScore] = useState(0);
    const [imageIndex, setImageIndex] = useState(null);
    const [comIndex, setComIndex] = useState(null);

    const userResult = () => {
        if (userChoice === 'rock' && comChoice === 'scissor') {
            setResult('You Win');
            setUserScore(userScore + 1);
        } else if (userChoice === 'rock' && comChoice === 'paper') {
            setResult('You Lose');
            setComScore(comScore + 1);
        } else if (userChoice === 'scissor' && comChoice === 'rock') {
            setResult('You Lose');
            setComScore(comScore + 1);
        } else if (userChoice === 'scissor' && comChoice === 'paper') {
            setResult('You Win');
            setUserScore(userScore + 1);
        } else if (userChoice === 'paper' && comChoice === 'rock') {
            setResult('You Win');
            setUserScore(userScore + 1);
        } else if (userChoice === 'paper' && comChoice === 'scissor') {
            setResult('You Lose');
            setComScore(comScore + 1);
        } else {
            setResult('Draw');
        }
    }

    const imageChoice = () => {
        if (userChoice === 'rock') {
            setImageIndex(0);
        } else if (userChoice === 'paper') {
            setImageIndex(1);
        } else {
            setImageIndex(2);
        }
    }

    const comImage = () => {
        if (comChoice === 'rock') {
            setComIndex(0);
        } else if (comChoice === 'paper') {
            setComIndex(1);
        } else {
            setComIndex(2);
        }
    }

    useEffect(() => {
        if (counter > 0 && userChoice !== '') {
            var timer = setInterval(() => {
                setCounter(counter - 1);
            }, 1000)
        } else {
            imageChoice();
            comImage();
            userResult();
        }
        return () => {
            clearInterval(timer);
        }
    }, [counter, matchCount]);

    const restart = () => {
        setUserChoice('');
        setComChoice('');
        setMatchCount(0);
        setUserScore(0);
        setComScore(0);
        setCounter(3);
    }

    return (
        <div>
            {counter === 0 ?
                <div>
                    {<img className={classes.comImg} src={images[comIndex]} alt="images" />}
                    {<img className={classes.userImg} src={images[imageIndex]} alt="images" />}
                    {<Typography className={classes.result} variant='h4'>{result}</Typography>}
                </div>
                : <Typography className={classes.result} variant='h4'>{matchCount !== 0 && counter}</Typography>
            }
            <Score
                userScore={userScore}
                comScore={comScore} />
            <IconButton
                className={classes.restart}
                onClick={restart}><ReplayIcon />
            </IconButton>
        </div>
    )
}

export default GameResult
