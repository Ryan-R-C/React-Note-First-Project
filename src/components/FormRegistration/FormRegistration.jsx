import React, {Component} from'react';
import './form-registration-style.css'

export default class FormRegistration extends Component{
    
    constructor(props){
        super(props)
        this.title=""
        this.text=""
    }
    _handleTitle(event){
        event.stopPropagation()
        this.title = event.target.value
    }
    _handleText(event){
        event.stopPropagation()
        this.text = event.target.value
    }
    _createNote(event){
        event.preventDefault()
        event.stopPropagation()
        this.props.createNote(this.title, this.text)
    }

    render(){
        return(
        <section className="form-registration__section">
            <form
            onSubmit={this._createNote.bind(this)}>
                <input
                className="form-registration__section__form" 
                type="text"
                placeholder="Title"
                onChange={this._handleTitle.bind(this)}
                />
                <textarea
                className="form-registration__section__text-area" 
                placeholder="Write your note..."
                rows={15}
                onChange={this._handleText.bind(this)}
                />
                <button>
                Create note
                </button>
            </form>
        </section>
        )
    }
}