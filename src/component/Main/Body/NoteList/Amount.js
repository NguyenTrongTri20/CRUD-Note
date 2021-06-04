import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  
    rounded: {
      color:"rgb(102, 102, 240)",
      width: theme.spacing(4),
      height: theme.spacing(4),
      backgroundColor: "#e8f1f0"
    }
  }));


function Amount(props) {
    const customIcon = useStyles()
    const amount = props.amountElement
    return (
        <Fragment>
            <div className="amount" >
                <Avatar variant="rounded" className={customIcon.rounded}>
                    {amount}
                </Avatar>
            </div>
        </Fragment>
    );
}

export default Amount;