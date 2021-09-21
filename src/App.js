import React from 'react';
import NoteList from './components/NoteList'
import FormRegistration from './components/FormRegistration'
import './assets/App.css'

function App() {
  return(
    <main className="App_main">
      <section><FormRegistration/></section>
      <section><NoteList/></section>
      </main>
  );
}
export default App;
