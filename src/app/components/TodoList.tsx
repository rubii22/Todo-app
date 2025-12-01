'use client';

import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import Input from './Input';
import Button from './Button';

// A mock type for the todo item
type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  // Load todos from local storage on initial render
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return;
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (id: string, newText: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="flex gap-4">
        <Input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
        />
        <Button onClick={handleAddTodo} variant="primary" className="w-auto px-6">
          Add
        </Button>
      </div>
      
      {todos.length > 0 ? (
        <div className="space-y-4">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              {...todo}
              onToggle={handleToggleTodo}
              onDelete={handleDeleteTodo}
              onEdit={handleEditTodo}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 px-6 bg-white rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold text-neutral-gray">No tasks yet.</h3>
          <p className="text-neutral-gray">Start by adding one above!</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
