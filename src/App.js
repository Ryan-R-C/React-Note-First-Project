import React, { Component } from 'react';
import NoteList from './components/NoteList'
import FormRegistration from './components/FormRegistration'
import './assets/App.css'
import './assets/index.css'

class App extends Component {
  constructor(){
    super()

    this.state = {
      notes:[]
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
  
  createNoteOfLocalStorage(event){
    event.preventDefault()
    const CreatedTasks = JSON.parse(localStorage.getItem('task')) || []

    CreatedTasks.forEach((el, index)=>{
      console.log(...el, index)
      this.createNote(...el)
    })  
  }

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
export default App;
