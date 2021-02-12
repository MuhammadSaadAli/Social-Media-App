import React, { useState } from 'react';
import profilePicture from '../../../Assets/Images/profilePicture.jpg';
import Car from '../../../Assets/Images/car.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { InputAdornment, Input, Badge } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TelegramIcon from '@material-ui/icons/Telegram';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { FaRegComment } from 'react-icons/fa';
import Picker from 'emoji-picker-react';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '90%',
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
    },
    commentAvatar: {
        width: '5vh',
        height: '5vh',
        borderRadius: '50%',
    },
}));

export default function HomePosts() {
    const [like, setLike] = useState(false)
    const [emojiPicker, setEmojiPicker] = useState(false)
    const [initialText, setInitialText] = useState('');
    const [comment, setComment] = useState([])
    const [viewAllComment, setViewAllComment] = useState(false)

    const name = 'Muhammad Saad Ali';
    const classes = useStyles();

    const onEmojiClick = (event, emojiObject) => {
        setInitialText(initialText + emojiObject.emoji);
    };

    const ToggleViewComment = () => {
        setViewAllComment(!viewAllComment)
    }

    const CommentAdded = () => {
        setComment([...comment, { name: name, text: initialText, picture: profilePicture }])
        setInitialText('')
    };

    const TextChange = (e) => {
        setInitialText(e.target.value);
    };

    const Heart = () => {
        setLike(!like)
    }
    const Emoji = () => {
        setEmojiPicker(!emojiPicker)
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

            { comment.length > 2 ? comment.filter((com, ind) => {
                return (
                    <div>
                        <Badge badgeContent={` View all comments ${comment.length - 1}`} onClick={ToggleViewComment} />
                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }} key={comment.length}>
                            <img alt="avatar" className={classes.commentAvatar} src={com[comment.length - 1].picture} />
                            <div style={{ flexDirection: 'row', textAlign: 'initial' }}>
                                <div> {com[comment.length - 1].name}</div>
                                <div> {com[comment.length - 1].text}</div>
                            </div>
                        </div>
                    </div>
                )
            }) : comment.map((com, ind) => {
                return (
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }} key={ind}>
                        <img alt="avatar" className={classes.commentAvatar} src={com.picture} />
                        <div style={{ flexDirection: 'row', textAlign: 'initial' }}>
                            <div> {com.name}</div>
                            <div> {com.text}</div>
                        </div>
                    </div>
                )
            }


            )}
            { viewAllComment && comment.length > 2 ? comment.map((com, ind) => {
                return (
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }} key={ind}>
                        <Badge badgeContent='Hide comments' onClick={ToggleViewComment} />
                        <img alt="avatar" className={classes.commentAvatar} src={com.picture} />
                        <div style={{ flexDirection: 'row', textAlign: 'initial' }}>
                            <div> {com.name}</div>
                            <div> {com.text}</div>
                        </div>
                    </div>
                )
            }
            ) : null}
            <hr />


            <Input
                id="input-with-icon-adornment"
                onChange={TextChange}
                value={initialText}
                style={{ width: "95%" }}
                endAdornment={
                    <InputAdornment position="end">
                        <button onClick={CommentAdded} style={{
                            color: 'blue', backgroundColor: 'Transparent',
                            backgroundRepeat: 'no-repeat',
                            border: 'none',
                            cursor: 'pointer',
                            overflow: 'hidden'
                        }} >Post</button>
                    </InputAdornment>
                }
                startAdornment={

                    <InputAdornment position="start">

                        <button style={{
                            color: 'black', backgroundColor: 'Transparent',
                            backgroundRepeat: 'no-repeat',
                            border: 'none',
                            cursor: 'pointer',
                            overflow: 'hidden'
                        }} >  <EmojiEmotionsIcon onClick={Emoji} /> </button>
                    </InputAdornment>

                }
            />

            {emojiPicker ? <Picker onEmojiClick={onEmojiClick} /> : null}

        </Card>
    );
}
