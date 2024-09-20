import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        // no whitespaces
        // Function to add a todo
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
       //  console.log(todos, ...todos);
    }

    const removeTodo = id => {
        // Function to remove the todo
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }


    const updateTodo = (todoId, newValue) => {
        // Function to update the Todo
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const completeTodo = id => {
        // Function to complete the todo
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

  return (
    <div>
        <h1>What's the plan?</h1>
        <TodoForm onSubmit={addTodo}  />
        <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        />

    </div>
  )
}

export default TodoList
