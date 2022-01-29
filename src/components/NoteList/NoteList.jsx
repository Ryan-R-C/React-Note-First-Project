import React, {Component} from'react';
import CardNote from '../CardNote';
import './note-list-style.css'

//All props belongs Form Registration

export default class NoteList extends Component{


        constructor(){
        super();
        this.state = {notes:[]}
        this._newNotes = this._newNotes.bind(this);
        }
        componentDidMount(){
        this.props.notes.subscribe(this._newNotes);
        }
        // componentWillUnmount(){
        // this.props.notes.unSubscribe(this._novasnotes);
        // }
        _newNotes(newNote){
        this.setState({...this.state, newNote})
        }

    render(){
        return (
            <ul className="task">
                {//the note parameters is passed throught FormRegistration, contains all note data
                this.state.notes.map((note, index) =>{
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