import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css'

import AddTodo from './components/todos/addTodo';
import Todo from './components/models/todo';
import TodoItem from './components/todos/todoItem';

import { RootState } from './store/store';


enum FilterTodos {
  Undone = "Undone",
  Done = "Done"
}

function App() {

  const [filter, setFilter] = useState<FilterTodos>();

  const todos = useSelector((state: RootState) => state.todos)


  const TodosFilter = todos.filter((todo: Todo) => {
    if (filter === FilterTodos.Done) {
      return todo.done
    } else {
      return !todo.done
    }
  })

  return (
    <div className="App">
      <header>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <strong>Todo App</strong>
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className="jumbotron">
          <div className="container d-flex flex-column align-items-center">
            <h1 className="jumbotron-heading">Welcome!</h1>
            <p className="lead text-muted">To get started, add some items to your list:</p>
            <AddTodo />
          </div>
        </section>
        <div className="todosList">
          <div className="container">
            <div className="d-flex flex-column align-items-center ">
              <nav className="col-6 mb-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a onClick={() => setFilter(FilterTodos.Undone)} className={`btn nav-item nav-link font-weight-bold ${filter === FilterTodos.Undone ? "active" : ""}`} id="nav-home-tab">undone <span>{todos.filter(item => item.done !== true).length}</span></a>
                  <a onClick={() => setFilter(FilterTodos.Done)} className={`btn nav-item nav-link font-weight-bold ${filter === FilterTodos.Done ? "active" : ""}`} id="nav-profile-tab">done <span>{todos.filter(item => item.done === true).length}</span></a>
                </div>
              </nav>
              
              {
                TodosFilter.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)
              }
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
