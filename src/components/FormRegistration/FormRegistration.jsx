import moment from 'moment';
import React, {Component } from'react';
import './form-registration-style.css';

export default class FormRegistration extends Component{
    
    constructor(props){
        super(props)
        this.title=""
        this.date= ""
        this.text= ""
        this.category= "No category"
        //It tries to create a JSON of localStorage item, but if it cannot it just create an array
        this.LocalStorageData = JSON.parse(localStorage.getItem('task')) || []
        this.state = {categories:[]}
        this._newCategories = this._newCategories.bind(this);
    }

componentDidMount(){
    this.props.categories.subscribe(this._newCategories)
}


  componentWillUnmount(){
    this.props.categories.unSubscribe(this._newCategories);
  }

    _newCategories(newCategory){
        this.setState(
            { ...this.state, newCategory }
        )
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
    _handleCategory(event){
        event.stopPropagation()
        this.category = event.target.value
    }

    _handleDate(event){
        event.stopPropagation()
        console.log(event.target.value)
        this.date = moment(event.target.value).format('MMMM Do YYYY, h:mm')
    }
    _handleTitle(event){
        event.stopPropagation()
        console.log(event.target.value)

        this.title = event.target.value
        console.log(this.props.categories.categories)
    }
    _handleText(event){
        console.log(event.target.value)
        event.stopPropagation()
        this.text = event.target.value
        console.log(this.text)
    }

    _createNote(event){
        event.preventDefault()
        event.stopPropagation() 
        // let data = [this.title, this.date, this.text, this.category]
        // this.props.createNote(...data)
        console.log(this.title, this.date, this.text, this.category);
        this.props.createNote(this.title, this.date, this.text, this.category);
    }

    render(){
        return(
        <section
        className="form-registration__section"
        >
            <form
            className="form-registration__section__form"
            onSubmit={this._createNote.bind(this)}>
                <select
                onChange={this._handleCategory.bind(this)}
                >
                    <option value="No category">No category</option>
                {
                    this.props.categories.categories.map(
                        (category, index) => {
                        console.log(category)
                        return <option
                        key={index}>
                            {category}
                        </option>
                        }
                        
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