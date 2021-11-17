import React, {Component} from'react';
import './category-list.css';

export default class CategoryList extends Component{
render(){
    return(
        <article className="category-list">
            <ul  
            className="category-list__list-father">
                <li
                className="category-list__list-father__list-element">
                    HELLO
                </li>
                <li
                className="category-list__list-father__list-element">
                    HELLO
                </li>
                <li
                className="category-list__list-father__list-element">
                    HELLO
                </li>
                <li
                className="category-list__list-father__list-element">
                    HELLO
                </li>
            </ul>
            <input type="text"
            className="category-list__input"/>
        </article>
    )
}
}