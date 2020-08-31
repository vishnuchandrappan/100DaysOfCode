import React from "react";
import { FetchData } from "../../render-props/FetchData";
import styled from "styled-components";
import {Container} from '../../_shared/Container';

const Card = styled.div`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 4px 4px 10px #2f2f2f6c;
  background: ${(props) => {return props.completed ? '#2f2f2f' : 'white'}};
  color: ${(props) => {return props.completed ? 'gray' : '#2f2f2f'}};

`;


const TodosContainer = ({ todos }) => {
  return (
    <Container>
      {todos.map((todo) => (
        <Card key={todo.id} completed={todo.completed}>
          <h3>{todo.title}</h3>
        </Card>
      ))}
    </Container>
  );
};

export const Todos = () => {
  return (
    <FetchData
      render={(todos) => <TodosContainer todos={todos} />}
      entity="todos"
    />
  );
};

export default Todos;
