import React from 'react';
import { Todo } from '../models/model';
import './style.css';

interface Props {
  todos: Todo[];
  onSetTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, onSetTodos }) => (
  <div className="todos">
    {todos.map((el) => (
      <li key={el.id}>{el.todo}</li>
    ))}
  </div>
);

export default TodoList;
