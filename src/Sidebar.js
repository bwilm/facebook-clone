import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StoreFrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src={"https://i.ibb.co/kXDyJRL/88000342-10104084757156047-1335900060742844416-n.jpg"} title="Brandon Kyle" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StoreFrontIcon} title="MarketPlace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" /> 
            <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace" /> 
        </div>
    )
}

export default Sidebar
