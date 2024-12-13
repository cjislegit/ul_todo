import React, { useState } from 'react';

import { Checkbox } from './ui/checkbox';

const Todos = () => {
  const [todos, setTodos] = useState([
    { todo: 'Seed todo', complete: false },
    { todo: 'Seed todo 2', complete: false },
  ]);

  return (
    <>
      {todos.map((todo) => {
        return <Checkbox mb={'15px'}>{todo.todo}</Checkbox>;
      })}
    </>
  );
};

export default Todos;
