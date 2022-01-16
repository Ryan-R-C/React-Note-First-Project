import React, {Component} from'react';
import './category-list.css';

export default class CategoryList extends Component{
render(){
    return(
        <article className="category-list">
            <ul  
            className="category-list__list-father">
                {
                    this.props.categories.map(
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
            className="category-list__input"/>
        </article>
    )
}
}