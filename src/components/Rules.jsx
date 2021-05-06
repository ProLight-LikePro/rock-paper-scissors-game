import React, { useState } from 'react'
import HelpIcon from '@material-ui/icons/Help';
import { IconButton, makeStyles, Modal } from '@material-ui/core';
import rules from '../img/rules.png';

const useStyles = makeStyles(theme => ({
    help: {
        color: '#fff',
        position: 'absolute',
        bottom: '2%',
        right: '2%',
        [theme.breakpoints.up(1600)]: {
            transform: 'scale(2)',
            bottom: '3%',
            right: '3%',
        }
    },
    img: {
        width: theme.spacing(20),
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        [theme.breakpoints.up(375)]: {
            width: theme.spacing(30)
        },
        [theme.breakpoints.up(1600)]: {
            width: theme.spacing(40)
        }
    }
}));

const Rules = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const img = (
        <img className={classes.img} src={rules} alt="rules" />
    )

    return (
        <div>
            <IconButton onClick={() => setOpen(true)} className={classes.help}>
                <HelpIcon />
            </IconButton>
            <Modal
                open={open}
                onClose={() => setOpen(false)}>
                {img}
            </Modal>
        </div>
    )
}

export default Rules
