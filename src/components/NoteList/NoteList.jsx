import React, {Component} from'react';
import CardNote from '../CardNote';
import './note-list-style.css'

//All props belongs Form Registration

export default class NoteList extends Component{
    render(){
        return (
            <ul className="task">
                {//the note parameters is passed throught FormRegistration, contains all note data
                this.props.notes.map((note, index) =>{
                    console.log(index)
                    return (    
                        <li className="task__note-list" 
                        key={index/*Needed to identify the element*/}>
                            <CardNote
                            index={index} 
                            title={note.title}
                            date={note.date}
                            text={note.text}
                            category={note.category}
                            //it will call CardNote's delete
                            deleteNote={this.props.deleteNote}/>
                        </li>
                    );
                })
                }
            </ul>
        );
    }
}