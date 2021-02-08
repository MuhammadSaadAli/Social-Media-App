import React from 'react'
import { Link } from "react-router-dom";


// import from '@material-ui';
import { Paper, FormControl, TextField, Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import useStyles from './styles'


function Login() {
    const classes = useStyles()
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className={classes.paper}>
                <Paper elevation={2}>
                    {/* Instagram Logo Image */}
                    {/* <img src="https://i.imgur.com/zqpwkLQ.png" alt='logo' style={{marginTop: '20px'}}  /> */}

                    <h2 style={{ fontFamily: 'Lobster cursive' }}>
                        Social Media App
            </h2>


                    <FormControl className={classes.inputField}>
                        <TextField label="User name or Email" variant="outlined" />
                        <TextField label="Password" variant="outlined" />

                        <Button variant="contained" style={{ backgroundColor: '#0095f6', color: 'white' }} >
                            Log in
             </Button>
                        <div style={{ width: '100%', height: '12px', borderBottom: '1px solid black', textAlign: 'center' }}>
                            <span style={{ backgroundColor: 'white', padding: ' 0 10px' }}>
                                OR
             </span>
                        </div>
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>

                            <FacebookIcon fontSize="small" /> Login with facebook
                </div>
                        <div>
                            Forget Password ?
                </div>

                    </FormControl>
                </Paper>

            </div>

            <div className={classes.signUpPaper}>
                <Paper elevation={3}>
                    <div style={{ marginTop: '1.5vw' }}>
                        Don't have an account? <Link style={{ color: '#3EC3DF', textDecoration: 'none' }} to="/signup">Sign up</Link>
                    </div>
                </Paper>
            </div>
        </div>
    )
}

export default Login