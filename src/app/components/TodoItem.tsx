'use client';

import React from 'react';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

const TodoItem = ({ id, text, completed, onToggle, onDelete, onEdit }: TodoItemProps) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [newText, setNewText] = React.useState(text);

  const handleEdit = () => {
    onEdit(id, newText);
    setIsEditing(false);
  };

  return (
    <div className={`flex items-center p-4 bg-white rounded-xl border border-neutral-gray transition-all duration-300 ${completed ? 'opacity-50' : 'shadow-md'}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
        className="form-checkbox h-5 w-5 text-primary-deep-wine rounded focus:ring-primary-deep-wine"
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
          className="flex-grow mx-4 bg-transparent border-b-2 border-primary-deep-wine focus:outline-none"
          autoFocus
        />
      ) : (
        <span className={`flex-grow mx-4 text-neutral-gray ${completed ? 'line-through' : ''}`}>
          {text}
        </span>
      )}
      <div className="flex items-center space-x-2">
        <button onClick={() => setIsEditing(!isEditing)} className="text-neutral-gray hover:text-primary-deep-wine transition-colors">
          <FiEdit2 size={20} />
        </button>
        <button onClick={() => onDelete(id)} className="text-neutral-gray hover:text-red-500 transition-colors">
          <FiTrash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;


