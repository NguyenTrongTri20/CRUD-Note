import React, { Fragment } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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


function Setting(props) {

    const Theme = useStyles()
    const{isLightTheme} = props
    return (
        <Fragment>
            <div className="setting">

                <NavItem 
                    icon={<SettingsIcon className={isLightTheme ? Theme.light : Theme.dark}/>}
                    title="Setting"
                    isLightTheme={isLightTheme}
                />

                <NavItem 
                    icon={<ExitToAppIcon className={isLightTheme ? Theme.light : Theme.dark}/>}
                    title="Log Out"
                    isLightTheme={isLightTheme}
                />
            </div>
        </Fragment>
    );
}

export default Setting;