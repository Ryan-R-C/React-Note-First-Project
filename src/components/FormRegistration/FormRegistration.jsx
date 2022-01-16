import moment from 'moment';
import React, {Component} from'react';
import './form-registration-style.css';

export default class FormRegistration extends Component{
    
    constructor(props){
        super(props)
        this.title=""
        this.date= ""
        this.text= ""
        //It tries to create a JSON of localStorage item, but if it cannot it just create an array
        this.LocalStorageData = JSON.parse(localStorage.getItem('task')) || []
        
        
    }
    
    setLocalStorage(){
        localStorage.setItem('task', JSON.stringify(this.LocalStorageData))
    }

    handleLocalStorage(data){
        //Transforms the data in an objeto to convert to string
        Object.assign({}, ...data)
        this.LocalStorageData.push(data)
        this.setLocalStorage()
    }

    _handleDate(event){
        event.stopPropagation()
        this.date = moment(event.target.value).format('MMMM Do YYYY, h:mm')
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
        let data = [this.title, this.date, this.text]
        this.props.createNote(...data)
        this.handleLocalStorage(data)
    }

    render(){
        return(
        <section
        className="form-registration__section"
        >
            <form
            className="form-registration__section__form"
            onSubmit={this._createNote.bind(this)}>
                <select>
                {
                    this.props.categories.map(
                        (category, index) => (
                        <option
                        key={index}>
                            {category}
                        </option>
                        )
                    )
                }

                </select>

                <input
                type="datetime-local" 
                
                placeholder="year-month-day"
                
                className="dateTime"
                
                onChange={this._handleDate.bind(this)} />


                <input
                className="form-registration__section__form__title" 
                
                type="text"
                
                placeholder="Title"
                
                onChange={this._handleTitle.bind(this)}
                />


                <textarea
                className="form-registration__section__form__text-area" 

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