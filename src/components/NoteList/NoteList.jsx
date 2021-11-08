import React, {Component} from'react';
import CardNote from '../CardNote';
import './note-list-style.css'


export default class NoteList extends Component{
    render(){
        return (
            <ul className="task">
                {this.props.notes.map((note, index) =>{
                    console.log(index)
                    return (    
                        <li className="task__note-list" 
                        key={index}>
                            <CardNote
                            index={index} 
                            title={note.title}
                            date={note.date}
                            text={note.text}
                            deleteNote={this.props.deleteNote}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}