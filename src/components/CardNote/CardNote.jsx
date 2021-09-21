import React, {Component} from'react';
import "./card-note.css"

export default class CardNote extends Component{ 
    render(){
        return (
            <section className="card-note">
                <header>
                    <h4>
                        Title
                    </h4>
                </header>
                <main>
                    <p>
                        Note Content
                    </p>
                </main>
            </section>
        )
    }
}