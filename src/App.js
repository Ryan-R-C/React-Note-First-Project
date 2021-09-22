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

  createNote(title, text) {
    const newNote = {title, text}
    const newNotesArray = [...this.state.notes,newNote]
    const newStatea = {
      notes: newNotesArray
    }
    this.setState(newStatea)
  }

  render() {
    return(
    <main className="App_main">
      <section><FormRegistration
       createNote={this.createNote.bind(this)} /></section>
      <section><NoteList notes={this.state.notes}/></section>
      </main>
  );
}}
export default App;
