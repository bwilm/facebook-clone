import React from 'react'
import './Header.css';
import {Avatar, Icon} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton/IconButton'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StoreFrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const [{user}] = useDataLayerValue(null);
    return (
        <div className="header">
            <div className="header_left">
                <img
                    className="header_logo"
                    src="https://i.ibb.co/8Xh7nnT/facebooklogo.png"
                    alt=""/>
                <div className="header_input">
                    <SearchIcon/>
                    <input placeholder="Search Facebook" type="text"/>
                </div>

            </div>
            <div className="header_center">
                <div className="header_option header_option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <StoreFrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar src={user.photoUrl} alt="B" />
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
