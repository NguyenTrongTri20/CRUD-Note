import React, { Fragment } from 'react';
import MainPage from './MainPage';


function Main(props) {
    const {isLightTheme} = props
    return (
        <Fragment>
            <div className="col-sm-9" >
          
          <MainPage 
            isLightTheme={isLightTheme}
          />
          </div>
        </Fragment>
    );
}

export default Main;