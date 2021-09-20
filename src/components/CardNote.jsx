import React, {Component} from'react';


export default class CardNote extends Component{ 
    render(){
        return (
            <section>
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