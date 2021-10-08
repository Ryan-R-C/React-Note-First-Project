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

  render() {
    return(
    <main className="App_main">
      <div className="App_main__div-holder">
          <section className="App_main__div-holder__section">
            <FormRegistration
            createNote={this.createNote.bind(this)} />
          </section>
          <section className="App_main__div-holder__sect">
            <NoteList notes={this.state.notes}/>
          </section>
      </div>
    </main>
  );
}}
export default App;
