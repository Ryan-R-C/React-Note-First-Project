import React, {Component} from'react';
import "./card-note.css"
import {ReactComponent as DeleteSvg} from '../../assets/icons/delete.svg'


export default class CardNote extends Component{
    
    delete(){
        const index = this.props.index
        console.log(index);
        this.props.deleteNote(index)//It calls NoteList deleteNote
    }

    render(){
        return (
            <section className="CardNote">
                <header className="CardNote__header">
                    <h2 className="CardNote__header__title">
                        {this.props.title}
                    </h2>
                    <h3 className="CardNote__header__date">
                        {this.props.date}
                    </h3>
                </header>
                <main>
                    <p className="CardNote__main__content">
                        {this.props.text}
                    </p> 
                    <DeleteSvg alt="delete" onClick={this.delete.bind(this)}/>
                </main>
            </section>
        )
    }
}