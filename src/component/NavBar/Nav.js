import React, { Fragment } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import FolderIcon from '@material-ui/icons/Folder';
import SmsIcon from '@material-ui/icons/Sms';
import EventNoteIcon from '@material-ui/icons/EventNote';
import NavItem from './NavItem/NavItem';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    dark:{
        color:"white",
    },
    light:{
        color:"rgba(0, 0, 0, 0.26)"
    }
  }));


function Nav(props) {

    const Theme = useStyles()
    const {isLightTheme} = props

    return (
        <Fragment>
            <div className="option-list">
                
                <NavItem 
                    icon={<HomeIcon className={isLightTheme ? Theme.light : Theme.dark}  />}
                    title="Overview" 
                    isLightTheme={isLightTheme}
                
                />

                <NavItem 
                    icon={<EqualizerIcon className={isLightTheme ? Theme.light : Theme.dark}/>} 
                    title="Stats" 
                    isLightTheme={isLightTheme}
                />
                <NavItem 
                    icon={<FolderIcon className={isLightTheme ? Theme.light : Theme.dark}/>} 
                    title="Projects" 
                    isLightTheme={isLightTheme}
                />
                <NavItem 
                    icon={<SmsIcon className={isLightTheme ? Theme.light : Theme.dark}/>} 
                    title="Chat" 
                    isLightTheme={isLightTheme}
                />
                <NavItem 
                    icon={<EventNoteIcon className={isLightTheme ? Theme.light : Theme.dark}/>} 
                    title="Calendar" 
                    isLightTheme={isLightTheme}
                />
            </div>
        </Fragment>
    );
}

export default Nav;