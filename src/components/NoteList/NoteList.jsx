import React, {Component} from'react';
import CardNote from '../CardNote';
import './note-list-style.css'

export default class NoteList extends Component{
    render(){
        return (
            <ul>
                {Array.of("Work","Study","Family").map((categoty, index) =>{
                    return (
                        <li className="NoteList" key={index}>
                            <h3>
                                {categoty}
                            </h3>
                            <CardNote/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}