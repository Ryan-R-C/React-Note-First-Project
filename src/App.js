import React, { Component } from 'react';

/*============
 /COMPONENTS/  
============*/
import NoteList from './components/NoteList';
import FormRegistration from './components/FormRegistration';
import CategoryList from './components/CategoryList'

/*========
 /Assets/  
========*/
import './assets/App.css'
import './assets/index.css'

/*-----------------
In this app it works:
Form Registration give the user params to Note
-----------------*/

export default class App extends Component {
  constructor(){
    super()//access the element father object

    this.state = {
      notes:[],//storage all notes in a array
      categories:[]
    }
  }

  createNote(title, date ,text, category) {
    const newNote = {title, date ,text, category}
    const newNotesArray = [...this.state.notes,newNote]
    const newStatea = {
      notes: newNotesArray
    }
    this.setState(newStatea)
  }
  //To refract:
  createNoteOfLocalStorage(event){
    event.preventDefault()
    const CreatedTasks = JSON.parse(localStorage.getItem('task')) || []

    CreatedTasks.forEach((el, index)=>{
      console.log(...el, index)
      this.createNote(...el)
    })  
  }
  /*How delete works
  / It starts in the NoteList 
  /  after goes to CardNote who bind the element
  /  and calls a prefunction
  /  then this functions is called*/
  deleteThisTask(index){
      let arrayOfNotes = this.state.notes
      arrayOfNotes.splice(index,1)
      this.setState({notes: arrayOfNotes})
  }
  addCategory(category){

    const newNotesArray = [...this.state.categories, category]
    const newState = {
      ...this.state,
      categories: newNotesArray
    }
    this.setState(newState)
    
  }

  render() {
    return(
    <main className="App_main">
      <div className="App_main__div-holder">
        {/* <button
        onClick={
          this.createNoteOfLocalStorage.bind(this)
        }>
          Restore your last task
        </button> */}
        <div>
          <section className="App_main__div-holder__section">
            <FormRegistration
            categories={this.state.categories}
            createNote={this.createNote.bind(this)}
            />
          </section>
          <section className="App_main__div-holder__section
                              App_main__div-holder__section--NoteList">
            <CategoryList
            addCategory={this.addCategory.bind(this)}
            categories={this.state.categories}
            />
            <NoteList
            notes={this.state.notes}
            deleteNote={this.deleteThisTask.bind(this)}/>
          </section>
        </div>
      </div>
    </main>
  );
}}
