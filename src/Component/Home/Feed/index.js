import React from 'react';
import Stories from './Stories/Stories';
import HomePosts from './HomePost';
import Topbar from '../Topbar/Topbar';

export default function Feed() {
    return (
        <div>

            <Topbar />
            <Stories />
            <HomePosts />
        </div>
    )
}
