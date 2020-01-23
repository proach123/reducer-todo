import React from 'react';

import Item from './Todo';

const TodoList = props => {
  return (
    <div className="shopping-list">
      {props.state.map(item => (
        <Item key={item.id} item={item} dispatch={props.dispatch} />
      ))}
      <button className="clear-btn" onClick={()=> {props.dispatch({type: 'CLEAR'})}}>
        Clear Completed
      </button>

      </div>
  );
};

export default TodoList;
