import React, { Fragment } from 'react';

import Logo from './Logo';
import Nav from './Nav';
import Setting from './Setting';

function NavBar(props) {

    const{isLightTheme} = props

    return (
        <Fragment>
            <div className="col-sm-3" >
                <nav className={isLightTheme ? "nav-bar" : "nav-bar nav-bar-dark"}>
                    <Logo 
                        isLightTheme={isLightTheme}
                    />
                    <div className="nav">
                        <Nav 
                            isLightTheme={isLightTheme}
                        />
                        <Setting 
                            isLightTheme={isLightTheme}
                        />
                    </div>
                </nav>
            </div>
        </Fragment>
    );
}

export default NavBar;