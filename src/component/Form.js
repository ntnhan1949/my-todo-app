import React from 'react';
// import PropTypes from 'prop-types';

Form.propTypes = {
};

function Form(props) {

    const {setInputText, inputText, todos, setTodos, setStatus} = props;

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    } 

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.trunc(Math.random() * 1000),
            }
        ]);
        setInputText("");
    }

    const statushandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input 
                onChange={inputTextHandler} 
                type="text" 
                className="todo-input" 
                value={inputText}
            />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
            <select onChange={statushandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
            </div>
        </form>
    );
}

export default Form;