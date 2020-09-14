import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post username={"Brandon"}
            profilePic={"https://i.ibb.co/kXDyJRL/88000342-10104084757156047-1335900060742844416-n.jpg"}
            message={'WHOA THIS IS EPIC'} 
            timeStamp={'12:00AM'}
            username={'Brandon Kyle'}
            image={"https://i.ibb.co/BnL4mrB/batmanprofile.jpg"}/>
            <Post username={"Brandon"}
            profilePic={"https://i.ibb.co/kXDyJRL/88000342-10104084757156047-1335900060742844416-n.jpg"}
            message={'WHOA THIS IS EPIC'} 
            timeStamp={'12:00AM'}
            username={'Brandon Kyle'}
            />

            <Post />
        </div>
    )
}

export default Feed
