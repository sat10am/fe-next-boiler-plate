import styled from '@emotion/styled';
import { FormEvent, useState, useRef, ChangeEvent } from 'react';

type TodoFormEvent = EventTarget & { todo: HTMLInputElement };

function TodoPage(): JSX.Element {
  const [todos, setTodos] = useState<Array<string>>([]);
  const [todo, setTodo] = useState('');

  const todoInputRef = useRef(null);

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoFormEvent = e.target as TodoFormEvent;
    const todoText = todoFormEvent.todo.value;
    setTodos(todos.concat(todoText));

    setTodo('');
  };

  const handleChageTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  return (
    <Main>
      <header>
        <Title>TodoPage</Title>
        <form onSubmit={addTodo}>
          <input
            type="text"
            name="todo"
            placeholder="할 일을 입력해주세요"
            ref={todoInputRef}
            onChange={handleChageTodo}
            value={todo}
          />
          <button type="button">추가</button>
        </form>
        <ul>
          {todos.map((todoItem) => (
            <li key={todoItem}>{todoItem}</li>
          ))}
        </ul>
      </header>
    </Main>
  );
}
export default TodoPage;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
  color: tomato;
  text-align: center;
`;
