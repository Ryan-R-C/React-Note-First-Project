import React, {Component} from'react';
import "./card-note.css"

export default class CardNote extends Component{
    render(){
        return (
            <section className="CardNote">
                <header className="CardNote_header">
                    <h4>
                        {this.props.title}
                    </h4>
                </header>
                <main>
                    <p>
                        {this.props.text}
                    </p>
                </main>
            </section>
        )
    }
}