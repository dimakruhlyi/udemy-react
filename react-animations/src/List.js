import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export const List = ({items, onRemove}) => {
    return(
        <TransitionGroup component = {'ul'}>
            {items.map(item => {
                return(
                    <CSSTransition classNames ='os' timeout = {750} key = {item.id}>
                        <li onClick = {() => onRemove(item.id)}>{item.title}</li>
                    </CSSTransition>  
                )
            })}
        </TransitionGroup>
    )
}