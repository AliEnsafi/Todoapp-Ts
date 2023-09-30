import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Todo from '../models/todo';
import { AppDispatch } from '../../store/store';
import { editTodo } from '../../store/slices/todoSlices';


interface Props {
    todo: Todo,
    setEdit: React.Dispatch<React.SetStateAction<boolean>>
}

const EditTodo: React.FC<Props> = ({ todo, setEdit }) => {

    const [input, setInput] = useState<string>(todo.title);
    const dispatch = useDispatch<AppDispatch>();

    const submitchange = (e: React.FormEvent) => {
        if (input !== "") {
            e.preventDefault();
            dispatch(editTodo({
                id: todo.id,
                value: input
            }))
            setEdit(false);
            setInput("");
        }
    }

    return (
        <>
            <form onSubmit={submitchange} className="col-6 mb-2">
                <div className="d-flex justify-content-between align-items-center border rounded p-3">
                    <div>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-info btn-sm mx-1">edit</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default EditTodo;