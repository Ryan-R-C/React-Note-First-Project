import React, {Component} from'react';

export default class FormRegistration extends Component{
    render(){
        return(
        <form>
            <input type="text" placeholder="Title"/>
            <textarea placeholder="Write your note"/>
            <button>
            Create note
            </button>
        </form>
        )
    }
}