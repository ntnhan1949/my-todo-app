import React from 'react';
import Todo from './Todo';
// import PropTypes from 'prop-types';

TodoList.propTypes = {
    
};

function TodoList(props) {

    const { todos, setTodos, filterTodos} = props;

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map((todo) => (
                    <Todo todo={todo} todos={todos} setTodos={setTodos} text={todo.text} key={todo.id}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;