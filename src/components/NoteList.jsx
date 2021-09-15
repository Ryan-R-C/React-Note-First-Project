import React, {Component} from'react';

export default class NoteList extends Component{
    render(){
        return (
        <ul>
            <li>
            <section>
                <header>
                <h3>
                    Title
                </h3>
                </header>
                <main>
                <p>
                    Note Content
                </p>  
                </main>
            </section>
          </li>
      </ul>
        );
    }
}