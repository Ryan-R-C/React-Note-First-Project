import React, {Component} from'react';
import "./card-note.css"

export default class CardNote extends Component{
    deleteThisTask(){
        const Delete = (event) =>{
        const delBtn = event.target
            const semiParent = delBtn.parentElement.parentElement
            const deleteParent = semiParent.parentElement
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