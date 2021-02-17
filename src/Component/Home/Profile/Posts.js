import React from 'react'

import profilePicture from '../../../Assets/Images/profilePicture.jpg'
import './styles.css'


export default function Posts() {

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="allPosts" >

                <img alt="Posts" src={profilePicture} className="pictures" />
                <img alt="Posts" src={profilePicture} className="pictures" />
                <img alt="Posts" src={profilePicture} className="pictures" />
                <img alt="Posts" src={profilePicture} className="pictures" />
                <img alt="Posts" src={profilePicture} className="pictures" />
                <img alt="Posts" src={profilePicture} className="pictures" />
                <img alt="Posts" src={profilePicture} className="pictures" />
            </div >
        </div>
    )
}
