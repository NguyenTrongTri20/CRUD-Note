import React, { Fragment } from 'react';

function Title(props) {
    const {isLightTheme} = props
    return (
        <Fragment>
            <div className={isLightTheme ? "title-body" :"title-body title-body-dark"}>
                Project
            </div>
        </Fragment>
    );
}

export default Title;