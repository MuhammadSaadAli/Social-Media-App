import React, { useState } from 'react';

import './style.css'
import profilePicture from '../../../../Assets/Images/profilePicture.jpg'

export default function Suggestion() {
    const [name, setName] = useState('Muhammad Saad Ali')
    const [userName, setUserName] = useState('Muhammadsaadali96')

    return (
        <div className='main'>
            <div className='myProfile'>

                <div className='image'>

                    <img alt="avater" src={profilePicture} className="avatar" />
                </div>
                <div className='myName'>
                    <p><strong>{userName}</strong></p>
                    <p className='gray'>{name}</p>
                </div>
            </div>

            <div className="suggestion">

                <p> Suggestion for You </p>
                <p > See all</p>

            </div>


            <div className='suggestionProfile'>

                <div className='image'>

                    <img alt="avater" src={profilePicture} className="suggestionAvatar" />
                </div>
                <div className='suggestionName'>
                    <p><strong>{userName}</strong></p>
                    <p className='gray'>Suggestion for you </p>
                </div>
            </div>
            <div className='suggestionProfile'>

                <div className='image'>

                    <img alt="avater" src={profilePicture} className="suggestionAvatar" />
                </div>
                <div className='suggestionName'>
                    <p><strong>{userName}</strong></p>
                    <p className='gray'>Suggestion for you </p>
                </div>
            </div>
            <div className='suggestionProfile'>

                <div className='image'>

                    <img alt="avater" src={profilePicture} className="suggestionAvatar" />
                </div>
                <div className='suggestionName'>
                    <p><strong>{userName}</strong></p>
                    <p className='gray'>Suggestion for you </p>
                </div>
            </div>
            <div className='suggestionProfile'>

                <div className='image'>

                    <img alt="avater" src={profilePicture} className="suggestionAvatar" />
                </div>
                <div className='suggestionName'>
                    <p><strong>{userName}</strong></p>
                    <p className='gray'>Suggestion for you </p>
                </div>
            </div>
        </div>
    )

}
