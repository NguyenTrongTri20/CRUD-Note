import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import AvatarImg from '../../../img/avatar.png'

function UserInfo(props) {
    
    const {isLightTheme} = props
    return (
        <Fragment>
            <div className="user-info">
                <div className={isLightTheme ? "name":"name name-dark"}>
                    Nguyễn Trọng Trí
                </div>
                <div className="avatar" >
                    <Avatar src={AvatarImg} />
                </div>
            </div>
        </Fragment>
    );
}

export default UserInfo;