import React, { useState, useEffect } from 'react';
import { StyledContainer, StyledTodoList, StyledInfo, StyledForm } from './styles';
import { Button, Icon, Input, List } from 'antd';

const TodoList = () => {
  let [todoItems, addToDoItem] = useState([]);
  let [inputValue, handleChange] = useState('');

  useEffect(() => {
    alert('Welcome!');
  }, []);

  addToDoItem = e => {
    e.preventDefault();
    todoItems.push(inputValue);
    handleChange(inputValue = '');
  }

  return (
    <StyledContainer>
      <StyledInfo>
        <StyledTodoList>
          <List
            size="large"
            header={<h1 style={{ margin: 0 }}><Icon type="pushpin" /> To-Do List</h1>}
            bordered
            dataSource={todoItems}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </StyledTodoList>
        <StyledForm onSubmit={e => addToDoItem(e)}>
          <Input
            value={inputValue}
            onChange={e => handleChange(inputValue = e.target.value)}
            style={{ marginRight: 10 }}
            placeholder="What do you need to do?"
          />
          <Button type="submit">
            <Icon type="plus" />
          </Button>
        </StyledForm>
      </StyledInfo>
    </StyledContainer>
  );
}

export default TodoList;