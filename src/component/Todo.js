import React from 'react';
// import PropTypes from 'prop-types';
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Todo.propTypes = {
    
};

function Todo(props) {

    const {text, todo, todos, setTodos} = props;

    const onDeletehandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completehandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item,
                    completed: !item.completed,
                }
            }
            return item;
        }));
        toast.success('Thêm thành công!', {
            position: "bottom-right",
            // transition : Slide,
            // autoClose: 3000,
            // hideProgressBar: false,
            // closeOnClick: true,
            // pauseOnHover: true,
            // draggable: false,
            // progress: undefined,
            });

    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completehandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={onDeletehandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;