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
  
  _createNoteOfLocalStorage(){
    const CreatedTasks = JSON.parse(localStorage.getItem('task')) || []

    this.createNote(CreatedTasks)

    CreatedTasks.forEach(el=>{
      console.log(...el)
      this.createNote(...el)
    })
    
}

  render() {
    return(
    <main className="App_main">
      <div className="App_main__div-holder">
        <button
        onClick={() => this._createNoteOfLocalStorage()}>

        </button>
          <section className="App_main__div-holder__section">
            <FormRegistration
            createNote={this.createNote.bind(this)} />
          </section>
          <section className="App_main__div-holder__section
                              App_main__div-holder__section--NoteList">
            <NoteList notes={this.state.notes}/>
          </section>
      </div>
    </main>
  );
}}
export default App;
