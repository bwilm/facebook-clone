import React,{useState} from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideoCamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender({src}) {
    const[input, setInput] = useState("");
    const[imageUrl, setImageUrl] = useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();

        //some db shizz
        setInput("")
        setImageUrl("")
    }
    return (
        <div className="messageSender">
            <div className="messageSender_top">
            <Avatar src={src} />
            <form action="">
                <input className="messageSender_input" 
                placeholder="Whats on your mind?" 
                value={input} 
                onChange={(e) => setInput(e.target.value)}/>
                <input 
                placeholder="image URL (Optional)"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                 />
                <button  onClick={handleSubmit} type="submit"> Hidden Submit</button>
            </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideoCamIcon style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>
    )
}

export default MessageSender
