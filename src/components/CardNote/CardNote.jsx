import React, {Component} from'react';
import "./card-note.css"
import deleteSvg from '../../assets/icons/delete.svg'

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
                    <img src={deleteSvg} alt="delete" onClick={this.deleteThisTask()}/>
                </main>
            </section>
        )
    }
}