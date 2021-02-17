import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Paper, TextField, TextareaAutosize, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({

    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
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
        width: 200,
    },
    genderDiv: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
    },
}));

export default function Settings() {
    const classes = useStyles();
    const [value, setValue] = useState('female');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <FormControl style={{ width: '50%' }}  >
            <Paper className={classes.paper}>


                <input accept="image/*" style={{ display: 'none', }} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">

                        <Avatar className={classes.avatar}>Img</Avatar>
                    </IconButton>
                    <div> Upload an Image </div>
                </label>
                <TextField id="standard-basic" label="Name" />
                <TextField id="standard-basic" label="Username" />
                <TextField id="standard-basic" label="Website" />
                <TextareaAutosize rowsMin={3} id="standard-basic" placeholder="Bio" />
                <TextField id="standard-basic" label="Phone number" type="number" />
                <div className={classes.genderDiv}>
                    <div>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </div>

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

            </Paper>
        </FormControl>
    );
}

