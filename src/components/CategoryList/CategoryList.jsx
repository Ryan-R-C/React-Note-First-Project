import React, {Component} from'react';
import './category-list.css';

export default class CategoryList extends Component{
    
    constructor(){
        super();
        this.state = {categories:[]}
        this._newCategories = this._newCategories.bind(this);
      }

    componentDidMount(){
        this.props.categories.subscribe(this._newCategories.bind(this));
    }

    _newCategories(categories){
        console.log(categories)
        this.setState({...this.state, categories})
    }



    _handleInputEvent(e){
        console.log(e.key)
        if(e.key === 'Enter'){
            // console.log(e.target.value)
            this.props.addCategory(e.target.value)
            e.target.value = ''
        }
    }
 
render(){
    return(
        <article className="category-list">
            <ul  
            className="category-list__list-father">
                {
                    this.state.categories.map(
                        (category, index) => (
                        <li
                        key={index}
                        className="category-list__list-father__list-element">
                            {category}
                        </li>
                        )
                    )
                }
            </ul>
            <input type="text"
            className="category-list__input"
            placeholder='Add a category :)'
            onKeyUp={this._handleInputEvent.bind(this)}
            />
        </article>
    )
}
}