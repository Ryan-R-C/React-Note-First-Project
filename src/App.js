import React, { Component } from 'react';

/*============
 /COMPONENTS/  
============*/
import NoteList from './components/NoteList'
import FormRegistration from './components/FormRegistration'

/*========
 /Assets/  
========*/
import './assets/App.css'
import './assets/index.css'

export default class App extends Component {
  constructor(){
    super()//access the element father object

    this.state = {
      notes:[]//storage all notes in a array
    }
  }

  createNote(title, date ,text) {
    const newNote = {title, date ,text}
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
  /*It starts in the NoteList 
  / after goes to CardNote who bind the element
  / and calls a prefunction
  / then this functions is called*/
  deleteThisTask(index){
      let arrayOfNotes = this.state.notes
      arrayOfNotes.splice(index,1)
      this.setState({notes: arrayOfNotes})

}

  render() {
    return(
    <main className="App_main">
      <div className="App_main__div-holder">
        <button
        onClick={
          this.createNoteOfLocalStorage.bind(this)
        }>
          Restore your last task
        </button>
          <section className="App_main__div-holder__section">
            <FormRegistration
            createNote={this.createNote.bind(this)}
            />
          </section>
          <section className="App_main__div-holder__section
                              App_main__div-holder__section--NoteList">
            <NoteList
            notes={this.state.notes}
            deleteNote={this.deleteThisTask.bind(this)}/>
          </section>
      </div>
    </main>
  );
}}
