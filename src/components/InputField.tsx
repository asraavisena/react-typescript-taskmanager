import React, { useRef } from 'react';
import './style.css';

interface Props {
  todo: string;
  onSetTodo: React.Dispatch<React.SetStateAction<string>>;
  onHandleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, onSetTodo, onHandleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        onHandleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input ref={inputRef} type="input" placeholder="Enter a task" className="input__box" value={todo} onChange={(e) => onSetTodo(e.target.value)} />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
