import React, { useState } from 'react';
import profilePicture from '../../../Assets/Images/profilePicture.jpg';
import Car from '../../../Assets/Images/car.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TelegramIcon from '@material-ui/icons/Telegram';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { FaRegComment } from 'react-icons/fa';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '90%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        width: '8vh',
        height: '8vh',
        borderRadius: '50%',
    }
}));

export default function HomePosts() {
    const [like, setLike] = useState(false)
    const classes = useStyles();

    const Heart = () => {
        setLike(!like)

    }
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <img src={profilePicture} className={classes.avatar} alt='Saad' />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Muhammad Saad Ali"
                subheader="Ferrari World"
            />
            <CardMedia
                className={classes.media}
                image={Car}
                title="Car"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Ferrari World Abu Dhabi is a mostly indoors amusement park on Yas Island in Abu Dhabi, United Arab Emirates. It is the first Ferrari-branded theme park and has the record for the largest space frame structure ever built. Formula Rossa, the world's fastest roller coaster, is also located here
        </Typography>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <CardActions disableSpacing>
                    <IconButton onClick={Heart} style={like ? { color: 'red' } : { color: '' }} aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="comment">
                        <FaRegComment />
                    </IconButton>
                    <IconButton aria-label="share">
                        <TelegramIcon />
                    </IconButton>



                </CardActions>

                <CardActions disableSpacing>


                    <IconButton aria-label="share">

                        <BookmarkBorderIcon />
                    </IconButton>

                </CardActions>

            </div>

            <hr />

            {/* <TextareaAutosize style={{ width: '80%' }} aria-label="minimum height" rowsMin={2} placeholder="Add a comment" /> */}
            <TextField id="standard-basic" label="Add a comment here" > </TextField>

        </Card>
    );
}
