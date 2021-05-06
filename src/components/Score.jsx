import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react';

const useStyles = makeStyles(theme => ({
    grid: {
        '& .MuiTypography-root': {
            fontFamily: 'Krona One, sans-serif',
            fontSize: '0.8rem',
            color: '#fff',
            [theme.breakpoints.up(1600)]: {
                fontSize: '2rem'
            },
        },
        position: 'absolute',
        top: '50%',
        right: '2%',
        transform: 'translateY(-50%)',
        width: theme.spacing(10),
        [theme.breakpoints.up(1600)]: {
            width: theme.spacing(20),
        },
    },
    score: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
}));

const Score = ({
    userScore,
    comScore,
}) => {

    const classes = useStyles();

    return (
        <Grid
            className={classes.grid}
            container
            direction='column'
            justify='center'>
            <Typography
                align='center'
                variant='h6'>
                {comScore}
            </Typography>
            <Typography
                className={classes.score}
                align='center'
                variant='h6'>
                SCORE
            </Typography>
            <Typography
                align='center'
                variant='h6'>
                {userScore}
            </Typography>
        </Grid>
    )
}

export default Score
