import React, { Fragment } from 'react';

import Title from './Body/Title';
import NoteList from './Body/NoteList';
import { useSelector } from 'react-redux'

import SearchForm from './Head/SearchForm';
import ThemeMode from './Head/ThemeMode';
import UserInfo from './Head/UserInfo';

function Body(props) {
    
    const {isLightTheme} = props
    const notesList = useSelector(state => state.notesList)
    const {todo, inProgress, completed} = notesList
    

    

    return (
        <Fragment>

            <header className="header">
                <SearchForm 
                    isLightTheme={isLightTheme}
                />
                <div className="info-block">
                    <ThemeMode 
                        isLightTheme={isLightTheme}
                    />
                    <UserInfo 
                        isLightTheme={isLightTheme}
                    />
                </div>
            </header>

            <div className="body">
                <Title 
                    isLightTheme={isLightTheme}
                />
                <div className={isLightTheme ? "Notes" :"Notes Notes-dark"} draggable="false">
                    
                        <NoteList 
                            type="Todo"
                            isLightTheme={isLightTheme}
                            noteList = {todo}
                            id="todo"
                            
                        />
                        <NoteList 
                            type="In Progress"
                            isLightTheme={isLightTheme}
                            idChildElement="Progress-drag"
                            noteList={inProgress}
                            id="inProgress"
                        />
                        <NoteList 
                            type="Completed"
                            isLightTheme={isLightTheme}
                            idChildElement="Completed-drag"
                            noteList={completed}
                            id="completed"
                        />
                </div>
            </div>
        </Fragment>
    );
}

export default Body;