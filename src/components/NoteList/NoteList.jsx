import React, {Component} from'react';
import CardNote from '../CardNote';
import './note-list-style.css'

export default class NoteList extends Component{
    render(){
        return (
            <ul>
                {this.props.notes.map((note, index) =>{
                    return (
                        <li className="NoteList" key={index}>
                            <CardNote title={note.title} text={note.text}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}