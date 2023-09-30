import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/todoSlices";
import { AppDispatch } from "../../store/store";




const AddTodo: React.FC = () => {

    const [input, setInput] = useState<string>("")
    const dispatch = useDispatch<AppDispatch>();

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();

        if (input !== "") {
            dispatch(addTodo({
                title: input,
                id: Date.now(),
                done: false
            }))

            setInput("");
        }
    }

    return (
        <form onSubmit={submitHandler} className="form-inline" >
            <div className="form-group d-flex mb-4">
                <input onChange={(e) => setInput(e.target.value)} type="text" value={input} className="form-control mx-sm-3" placeholder="i want to do ..." />
                <button type="submit" className="btn btn-primary">add</button>
            </div>
        </form>
    )
}

export default AddTodo;