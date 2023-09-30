import React, { useState } from "react";
import { useDispatch } from "react-redux";


import Todo from "../models/todo";
import EditTodo from "./editTodo";

import { AppDispatch } from "../../store/store";
import { deleteTodo, toggleTodo } from "../../store/slices/todoSlices";


interface Props {
    todo: Todo
}

const TodoItem: React.FC<Props> = ({ todo }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();

    const deleteHandler = () => {
        dispatch(deleteTodo(todo.id))
    }
    const toggleHandler = () => {
        dispatch(toggleTodo(todo.id))
    }

    return (
        !edit
            ? <div className="col-6 mb-2">
                <div className="d-flex justify-content-between align-items-center border rounded p-3">
                    <div>
                        {todo.title}
                    </div>
                    <div>
                        <button onClick={toggleHandler} type="button" className={`btn btn-sm ${todo.done ? 'btn-success' : 'btn-secondary'}`}>{todo.done ? "undone" : "done"}</button>
                        <button type="button" className="btn btn-info btn-sm mx-1" onClick={(e) => setEdit(true)}>edit</button>
                        <button onClick={deleteHandler} type="button" className="btn btn-danger btn-sm ml-1">delete</button>
                    </div>
                </div>
            </div>
            : <EditTodo todo={todo} setEdit={setEdit} />
    )
}

export default TodoItem;