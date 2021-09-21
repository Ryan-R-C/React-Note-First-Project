import React, {Component} from'react';
import './form-registration-style.css'

export default class FormRegistration extends Component{
    render(){
        return(
        <form>
            <input 
            type="text"
             placeholder="Title"
             />
            <textarea 
            placeholder="Write your note..."
            rows={15}/>
            <button>
            Create note
            </button>
        </form>
        )
    }
}