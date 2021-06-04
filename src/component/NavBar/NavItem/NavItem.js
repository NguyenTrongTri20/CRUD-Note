import React, { Fragment } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

function NavItem({icon, title, isLightTheme}) {
    
    

    let match = useRouteMatch({
        path: `/${title}`,
        exact:false
    })

    
    return (
        <Fragment>
            <div className="option">
                <div className="icon">
                    {icon}
                </div>

                <div className={`${isLightTheme ? "title" : "title title-dark"} ${match ? "active" : ""}`}>
                    <Link to={`/${title}`}>{title}</Link>
                </div>
            </div>
        </Fragment>
    );
}

export default NavItem;