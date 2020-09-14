import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">

            {/*Story Reel*/}
            <Story image="https://i.ibb.co/Rp7tgXm/Screen-Shot-2020-09-13-at-3-44-42-PM.png" profileSrc="https://i.ibb.co/kXDyJRL/88000342-10104084757156047-1335900060742844416-n.jpg" title="Brandon Kyle" />
            <Story image="https://i.ibb.co/JBQ8PLT/Screen-Shot-2020-09-13-at-3-51-43-PM.png" profileSrc="https://i.ibb.co/ftWpj84/dazi.jpg" title="DAZI" />
            <Story image="https://i.ibb.co/phVDsxB/Screen-Shot-2020-09-13-at-3-52-04-PM.png" profileSrc="https://i.ibb.co/8dGzZBP/manchester.jpg" title="Manchester United"/>
            <Story image="https://i.ibb.co/JkqCQzx/Screen-Shot-2020-09-13-at-3-52-32-PM.png" profileSrc="https://i.ibb.co/6XgWXqs/Screen-Shot-2020-09-13-at-4-06-23-PM.png" title="80's Tees" />
            <Story image="https://i.ibb.co/wcQVsh0/Screen-Shot-2020-09-13-at-4-13-10-PM.png" profileSrc="https://i.ibb.co/NVfRF2z/onitsuka.jpg" title="Onitsuka" />

            
        </div>
    )
}

export default StoryReel
