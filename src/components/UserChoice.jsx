import { Avatar, Grid, makeStyles } from '@material-ui/core'
import React from 'react'

//import images
import rock from '../img/rock.png';
import paper from '../img/paper.png';
import scissor from '../img/scissor.png';

const useStyles = makeStyles(theme => ({
    grid: {
        '& .MuiAvatar-root': {
            backgroundColor: '#fff',
            width: theme.spacing(5),
            height: theme.spacing(5),
            [theme.breakpoints.up(1600)]: {
                width: theme.spacing(10),
                height: theme.spacing(10),
            },
            '& .MuiAvatar-img': {
                width: theme.spacing(4),
                height: theme.spacing(4),
                [theme.breakpoints.up(1600)]: {
                    width: theme.spacing(8),
                    height: theme.spacing(8),
                },
            },
            cursor: 'pointer',
            '&:hover': {
                transform: 'scale(1.5)',
                transition: 'transform 0.3s ease'
            }
        },
        position: 'absolute',
        top: '50%',
        left: '2%',
        transform: 'translateY(-50%)',
        width: theme.spacing(7)
    },
    paper: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up(1600)]: {
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(5),
        }
    }
}))

const UserChoice = ({
    setUserChoice,
    setComChoice,
    setMatchCount,
    matchCount,
    setCounter
}) => {

    const classes = useStyles();

    const initChoice = (e) => {
        setUserChoice(e.target.alt);

        const choices = ['rock', 'paper', 'scissor'];

        setComChoice(choices[Math.floor(Math.random() * 3)]);
        setMatchCount(matchCount + 1);
        setCounter(3);
    }

    return (
        <Grid
            className={classes.grid}
            container
            direction='column'
            alignItems='center'>
            <Avatar
                onClick={initChoice}
                src={rock}
                alt='rock' />
            <Avatar
                onClick={initChoice}
                className={classes.paper}
                src={paper}
                alt='paper' />
            <Avatar
                onClick={initChoice}
                src={scissor}
                alt='scissor' />
        </Grid>
    )
}

export default UserChoice
