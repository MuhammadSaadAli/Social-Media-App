import React from 'react'
import  {Link} from "react-router-dom";

// import from '@material-ui';
import {Paper , FormControl, TextField, Button} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import useStyles from './styles'


 function SignUp() {
     const classes = useStyles()
    return (
        <div style={{display:'flex' , flexDirection:'column' , justifyContent: 'center'}}>
        <div className={classes.paper}>
            <Paper elevation={2}>
                {/* Instagram Logo Image */}
            {/* <img src="https://i.imgur.com/zqpwkLQ.png" alt='logo' style={{marginTop: '20px'}}  /> */}

            <h2 style={{fontFamily: 'Lobster cursive' }}>
            Social Media App
            </h2>
            <h5 style={{color: '#A9A9A9'}}>
            Sign up to see photos and videos from your friends.
            </h5>
            <Button variant="contained" style={{backgroundColor: '#0095f6' , color:'white'}} >
            <div style={{display: 'flex' , justifyContent: 'center'}}>
                    
                    <FacebookIcon fontSize="medium" /> Login with facebook  
               </div>             </Button>
                
                
             <div  style= {{width: '100%', height: '12px', borderBottom: '1px solid black', textAlign: 'center'}}>
              <span style= {{backgroundColor: 'white' , padding:' 0 10px'}}>
                    OR
             </span>
                </div>
            <FormControl className={classes.inputField}>
            <TextField  label="Mobile Number or Email" variant="outlined"  />
            <TextField  label="Full Name" variant="outlined" />
            <TextField  label="User name or Email" variant="outlined" />
            <TextField  label="Password" variant="outlined" />
                
            <Button variant="contained"  style={{backgroundColor: '#0095f6' , color:'white'}} >
                    Sign Up
             </Button>
             <div style={{color: '#C0C0C0' , fontSize:'10px'}}>
             By signing up, you agree to our Terms , Data Policy and Cookies Policy 
             </div>

           </FormControl>
                 </Paper>
                 
        </div>

        <div className={classes.signUpPaper}>
        <Paper  elevation={3}>
            <div style={{marginTop:'1.5vw'}}>
        have an account? <Link style={{color:'#3EC3DF', textDecoration: 'none'}} to="/">Login</Link> 
            </div>
                 </Paper>
        </div>
        </div>
    )
}

export default SignUp