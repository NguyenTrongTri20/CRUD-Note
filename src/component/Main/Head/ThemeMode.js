import React, { Fragment } from 'react';

import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness5Icon from '@material-ui/icons/Brightness5';

import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { toggleThemeMode } from '../../../store/reducer/ThemeSlice'



function ThemeMode(props) {

    const theme = useSelector(state => state.theme)

    const {isLightTheme} = theme
    const dispatch = useDispatch()

    const onChangeTheme = () => {
        const action = toggleThemeMode()
        dispatch(action)
    }
    return (
        <Fragment>
            <div className="theme-mode">
                <div className="mode" onClick={onChangeTheme}>
                    <Avatar style={isLightTheme? {backgroundColor: "rgba(36,37,38,.7)"} : {backgroundColor: "#454545"}}>
                        {isLightTheme ?<Brightness5Icon style={{color:"#ffd54f"}}/>  :<NightsStayIcon style={{color:"#ffd54f"}} />}
                    </Avatar>
                </div>
            </div>
        </Fragment>
    );
}

export default ThemeMode;