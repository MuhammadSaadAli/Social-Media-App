import React from 'react';
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Avatar } from '@material-ui/core';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Car from '../../../../Assets/Images/car.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(2),
            width: theme.spacing(105),
            height: theme.spacing(13),
        },
    },
    slider: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(2),
        },
    },
    storyName: {
        marginRight: '30px'
    },
    // paper: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     flexWrap: 'wrap',
    //     '& > *': {
    //         margin: theme.spacing(2),
    //     },
    // },
    pictures: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        border: 'double 4px #CBC8C8'
    }

}));

export default function Stories() {
    const classes = useStyles();
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3
    };
    return (
        <div className={classes.root}>

            <Paper className={classes.paper} >
                <Slider className={classes.slider}  {...settings} >
                    <div><Avatar alt="Saad" className={classes.pictures} src={Car} />
                        <span className={classes.storyName} >Saad</span>
                    </div>
                    <div><Avatar alt="Saad" className={classes.pictures} src={Car} /><span className={classes.storyName}>Saad</span> </div>
                    <div><Avatar alt="Saad" className={classes.pictures} src={Car} /><span className={classes.storyName}>Saad</span>  </div>
                    <div><Avatar alt="Saad" className={classes.pictures} src={Car} /><span className={classes.storyName}>Saad</span>  </div>
                    <div><Avatar alt="Saad" className={classes.pictures} src={Car} /><span className={classes.storyName}>Saad</span>  </div>
                    <div><Avatar alt="Saad" className={classes.pictures} src={Car} /><span className={classes.storyName}>Saad</span>  </div>
                    <div><Avatar alt="Saad" className={classes.pictures} src={Car} /><span className={classes.storyName}>Saad</span>  </div>
                    <div><Avatar alt="Saad" className={classes.pictures} src={Car} /><span className={classes.storyName}>Saad</span>  </div>
                    <div><Avatar alt="Saad" className={classes.pictures} src={Car} /><span className={classes.storyName}>Saad</span>  </div>
                    <div><Avatar alt="Saad" className={classes.pictures} src={Car} /><span className={classes.storyName}>Saad</span>  </div>
                    <div><Avatar alt="Saad" className={classes.pictures} src={Car} /><span className={classes.storyName}>Saad</span>  </div>
                    <div><Avatar alt="Saad" className={classes.pictures} src={Car} /><span className={classes.storyName}>Saad</span>  </div>
                </Slider>
            </Paper>

        </div>
    );
}
