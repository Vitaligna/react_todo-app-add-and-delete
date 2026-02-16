import React from 'react';
import classNames from 'classnames';
import { Todo } from '../types/Todo';

type Props = {
  todo: Todo;
  onDelete: (id: number) => Promise<void>;
  loading: boolean;
};

export const TodoItem: React.FC<Props> = ({ todo, onDelete, loading }) => {
  const checkboxId = `todo-status-${todo.id}`;

  return (
    <div
      data-cy="Todo"
      className={classNames('todo', {
        completed: todo.completed,
      })}
    >
      <input
        id={checkboxId}
        type="checkbox"
        className="todo__status"
        data-cy="TodoStatus"
        checked={todo.completed}
        readOnly
      />

      <label
        htmlFor={checkboxId}
        className="todo__status-label"
        aria-label="Toggle todo status"
      >
        {/* Порожній лейбл */}
      </label>

      <span data-cy="TodoTitle" className="todo__title">
        {todo.title}
      </span>

      <button
        type="button"
        data-cy="TodoDelete"
        className="todo__remove"
        onClick={() => onDelete(todo.id)}
        disabled={loading}
      >
        ×
      </button>

      <div
        data-cy="TodoLoader"
        className={classNames('modal overlay', {
          'is-active': loading,
        })}
      >
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};
