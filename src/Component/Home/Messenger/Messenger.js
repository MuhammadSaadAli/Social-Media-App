import React from 'react'
import { Paper, Grid } from '@material-ui/core';
import { IoCreateOutline } from 'react-icons/io5';
import { RiTelegramLine } from 'react-icons/ri'

import profilePicture from '../../../Assets/Images/profilePicture.jpg'
import './style.css'
import Topbar from '../Topbar/Topbar'
export default function Messenger() {
    return (
        <div>
            <Topbar />
            {/* <Paper className='paper'>
                <div >
                    <Paper className='chat'>
                        <div className='title'>
                            Chat
                    </div>
                        <div>
                            <IoCreateOutline />
                        </div>
                    </Paper>
                    <Paper className='Messenger'>
                        <div className='messengerProfile'>

                            <div className='messengerImage'>

                                <img alt="avater" src={profilePicture} className="messengerAvatar" />
                            </div>
                            <div className='messengerName'>
                                <p><strong>Muhammad Saad Ali</strong></p>
                                <p className='gray'>Active 5 hours ago </p>
                            </div>
                        </div>
                        <div className='messengerProfile'>

                            <div className='messengerImage'>

                                <img alt="avater" src={profilePicture} className="messengerAvatar" />
                            </div>
                            <div className='messengerName'>
                                <p><strong>Muhammad Saad Ali</strong></p>
                                <p className='gray'>Active 5 hours ago </p>
                            </div>
                        </div>
                        <div className='messengerProfile'>

                            <div className='messengerImage'>

                                <img alt="avater" src={profilePicture} className="messengerAvatar" />
                            </div>
                            <div className='messengerName'>
                                <p><strong>Muhammad Saad Ali</strong></p>
                                <p className='gray'>Active 5 hours ago </p>
                            </div>
                        </div>
                        <div className='messengerProfile'>

                            <div className='messengerImage'>

                                <img alt="avater" src={profilePicture} className="messengerAvatar" />
                            </div>
                            <div className='messengerName'>
                                <p><strong>Muhammad Saad Ali</strong></p>
                                <p className='gray'>Active 5 hours ago </p>
                            </div>
                        </div>
                        <div className='messengerProfile'>

                            <div className='messengerImage'>

                                <img alt="avater" src={profilePicture} className="messengerAvatar" />
                            </div>
                            <div className='messengerName'>
                                <p><strong>Muhammad Saad Ali</strong></p>
                                <p className='gray'>Active 5 hours ago </p>
                            </div>
                        </div>
                        <div className='messengerProfile'>

                            <div className='messengerImage'>

                                <img alt="avater" src={profilePicture} className="messengerAvatar" />
                            </div>
                            <div className='messengerName'>
                                <p><strong>Muhammad Saad Ali</strong></p>
                                <p className='gray'>Active 5 hours ago </p>
                            </div>
                        </div>
                        <div className='messengerProfile'>

                            <div className='messengerImage'>

                                <img alt="avater" src={profilePicture} className="messengerAvatar" />
                            </div>
                            <div className='messengerName'>
                                <p><strong>Muhammad Saad Ali</strong></p>
                                <p className='gray'>Active 5 hours ago </p>
                            </div>
                        </div>
                        <div className='messengerProfile'>

                            <div className='messengerImage'>

                                <img alt="avater" src={profilePicture} className="messengerAvatar" />
                            </div>
                            <div className='messengerName'>
                                <p><strong>Muhammad Saad Ali</strong></p>
                                <p className='gray'>Active 5 hours ago </p>
                            </div>
                        </div>
                        <div className='messengerProfile'>

                            <div className='messengerImage'>

                                <img alt="avater" src={profilePicture} className="messengerAvatar" />
                            </div>
                            <div className='messengerName'>
                                <p><strong>Muhammad Saad Ali</strong></p>
                                <p className='gray'>Active 5 hours ago </p>
                            </div>
                        </div>
                        <div className='messengerProfile'>

                            <div className='messengerImage'>

                                <img alt="avater" src={profilePicture} className="messengerAvatar" />
                            </div>
                            <div className='messengerName'>
                                <p><strong>Muhammad Saad Ali</strong></p>
                                <p className='gray'>Active 5 hours ago </p>
                            </div>
                        </div>
                    </Paper>
                </div>
                <Paper className='conversation'>
                    <RiTelegramLine className='telegram' />
                </Paper>
            </Paper> */}

            <Grid container >
                <Paper className='paper'>
                    <Grid item xs={8} sm={4}>
                        <Grid item xs={12} sm={12}>
                            <Paper className='chat'>
                                <Grid item xs={8} sm={4} className='title'>
                                    Chat
                    </Grid> <Grid item sm={4} />

                                <Grid item xs={8} sm={4}>
                                    <IoCreateOutline />
                                </Grid>
                            </Paper>
                        </Grid>
                        <Paper className='Messenger'>

                            <div className='messengerProfile'>

                                <div className='messengerImage'>

                                    <img alt="avater" src={profilePicture} className="messengerAvatar" />
                                </div>
                                <div className='messengerName'>
                                    <p><strong>Muhammad Saad Ali</strong></p>
                                    <p className='gray'>Active 5 hours ago </p>
                                </div>
                            </div>
                            <div className='messengerProfile'>

                                <div className='messengerImage'>

                                    <img alt="avater" src={profilePicture} className="messengerAvatar" />
                                </div>
                                <div className='messengerName'>
                                    <p><strong>Muhammad Saad Ali</strong></p>
                                    <p className='gray'>Active 5 hours ago </p>
                                </div>
                            </div>
                            <div className='messengerProfile'>

                                <div className='messengerImage'>

                                    <img alt="avater" src={profilePicture} className="messengerAvatar" />
                                </div>
                                <div className='messengerName'>
                                    <p><strong>Muhammad Saad Ali</strong></p>
                                    <p className='gray'>Active 5 hours ago </p>
                                </div>
                            </div>
                            <div className='messengerProfile'>

                                <div className='messengerImage'>

                                    <img alt="avater" src={profilePicture} className="messengerAvatar" />
                                </div>
                                <div className='messengerName'>
                                    <p><strong>Muhammad Saad Ali</strong></p>
                                    <p className='gray'>Active 5 hours ago </p>
                                </div>
                            </div>
                            <div className='messengerProfile'>

                                <div className='messengerImage'>

                                    <img alt="avater" src={profilePicture} className="messengerAvatar" />
                                </div>
                                <div className='messengerName'>
                                    <p><strong>Muhammad Saad Ali</strong></p>
                                    <p className='gray'>Active 5 hours ago </p>
                                </div>
                            </div>
                            <div className='messengerProfile'>

                                <div className='messengerImage'>

                                    <img alt="avater" src={profilePicture} className="messengerAvatar" />
                                </div>
                                <div className='messengerName'>
                                    <p><strong>Muhammad Saad Ali</strong></p>
                                    <p className='gray'>Active 5 hours ago </p>
                                </div>
                            </div>
                            <div className='messengerProfile'>

                                <div className='messengerImage'>

                                    <img alt="avater" src={profilePicture} className="messengerAvatar" />
                                </div>
                                <div className='messengerName'>
                                    <p><strong>Muhammad Saad Ali</strong></p>
                                    <p className='gray'>Active 5 hours ago </p>
                                </div>
                            </div>
                            <div className='messengerProfile'>

                                <div className='messengerImage'>

                                    <img alt="avater" src={profilePicture} className="messengerAvatar" />
                                </div>
                                <div className='messengerName'>
                                    <p><strong>Muhammad Saad Ali</strong></p>
                                    <p className='gray'>Active 5 hours ago </p>
                                </div>
                            </div>
                            <div className='messengerProfile'>

                                <div className='messengerImage'>

                                    <img alt="avater" src={profilePicture} className="messengerAvatar" />
                                </div>
                                <div className='messengerName'>
                                    <p><strong>Muhammad Saad Ali</strong></p>
                                    <p className='gray'>Active 5 hours ago </p>
                                </div>
                            </div>
                            <div className='messengerProfile'>

                                <div className='messengerImage'>

                                    <img alt="avater" src={profilePicture} className="messengerAvatar" />
                                </div>
                                <div className='messengerName'>
                                    <p><strong>Muhammad Saad Ali</strong></p>
                                    <p className='gray'>Active 5 hours ago </p>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid container justify="space-evenly" direction='column' alignItems='center' >
                        <Grid item xs={2} />
                        <Grid className='conversation' item xs={4} >
                            <RiTelegramLine className='telegram' />
                            <div style={{ color: 'rgb(121, 117, 117)', fontSize: '3vh' }}>
                                Your Messages
                            </div>
                            <h4>
                                send private messages to your friends and group
                            </h4>
                            <button className='btn-send-message'>Send messages</button>
                        </Grid>
                        <Grid item xs={4} />
                    </Grid>
                </Paper>
            </Grid>
        </div>
    )
}
