import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Paper, TextField, TextareaAutosize, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Topbar from '../Topbar/Topbar'

const useStyles = makeStyles((theme) => ({

    root: {
        overflow: 'hidden',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: '#edf4f7',
        '& > *': {
            margin: theme.spacing(3),
            width: '100%'
        },
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    date: {
        width: '89%',
    },
    genderDiv: {
        display: 'flex',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        },
    },
    form: {
        width: '50%',
        marginTop: '4%',
    },
}));

export default function Settings() {
    const classes = useStyles();
    const [value, setValue] = useState('female');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div>
            <Topbar />
            <FormControl className={classes.form} >
                <Paper className={classes.paper}>
                    <input accept="image/*" style={{ display: 'none', }} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">

                            <Avatar className={classes.avatar}>Img</Avatar>
                        </IconButton>
                        <div> Upload an Image </div>
                    </label>
                    <TextField label="Name" />
                    <TextField label="Username" />
                    <TextField label="Website" />
                    <TextareaAutosize style={{ backgroundColor: '#edf4f7' }} rowsMin={3} id="standard-basic" placeholder="Bio" />
                    <TextField label="Phone number" type="number" />
                    <div className={classes.genderDiv}>
                        <div>
                            <FormLabel >Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </div>
                        <div>
                            <TextField
                                id="date"
                                label="Date of Birth"
                                type="date"
                                className={classes.date}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                    </div>

                </Paper>
            </FormControl>
        </div>
    );
}

