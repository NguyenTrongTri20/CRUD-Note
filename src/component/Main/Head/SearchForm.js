import React, { Fragment, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

import { search } from '../../../store/reducer/SearchSlice'

import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux'

const useStyles = makeStyles(() => ({
    dark:{
        color:"rgba(255,255,255, .7)",
    },
    light:{
        color:"#000"
    }
  }));

function SearchForm(props) {
    const Theme = useStyles()
    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    const onValueChange = e => {
        let inputValue = e.target.value
        setValue(inputValue)
        const action = search(inputValue)
        dispatch(action)
    }
    const {isLightTheme} = props
    return (
        <Fragment>
            <div className="search-block">  
                <div className="icon">
                    <SearchIcon className={isLightTheme ? Theme.light : Theme.dark}/>
                    
                </div>
                <input 
                    type="text" 
                    placeholder="Search" 
                    className={isLightTheme ? "search-form" :"search-form search-form-dark"}
                    value={value}
                    onChange={onValueChange}
                    
                />
            </div>
        </Fragment>
    );
}

export default SearchForm;