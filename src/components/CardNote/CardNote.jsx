import React, {Component} from'react';
import "./card-note.css"

export default class CardNote extends Component{
    
    deleteThisTask(){
        const Delete = (event) =>{
        const delBtn = event.target
            const deleteParent = delBtn.parentElement.parentElement.parentElement
            /*It run the from the root to the main atribute
            It goes: 
            /footer to section.CardNote to li.noteList*/
            deleteParent.remove()
        }
        return Delete
    }
    
    render(){
        return (
            <section className="CardNote">
                <header className="CardNote_header">
                    <h2>
                        {this.props.title}
                    </h2>
                    <h3>
                        {this.props.date}
                    </h3>
                </header>
                <main>
                    <p>
                        {this.props.text}
                    </p>
                </main>
                <footer>
                    <button className="delBtn" onClick={this.deleteThisTask()}>Delete</button>
                </footer>
            </section>
        )
    }
}