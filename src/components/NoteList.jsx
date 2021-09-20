import React, {Component} from'react';
import CardNote from './CardNote';

export default class NoteList extends Component{
    render(){
        return (
            <ul>
                {Array.of("Work","Study","Family").map((categoty, index) =>{
                    return (
                        <li key={index}>
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