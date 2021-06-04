import React, { Fragment } from 'react';

function Logo(props) {

    const {isLightTheme} = props
    return (
        <Fragment>
            <div className={isLightTheme ? "logo" : "logo logo-dark"}>
                <h4>Notes</h4>
            </div>
        </Fragment>
    );
}

export default Logo;