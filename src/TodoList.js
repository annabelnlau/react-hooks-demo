import React, { useState, useEffect } from 'react';
import { StyledContainer, StyledTodoList, StyledInfo, StyledForm } from './styles';
import { Button, Icon, Input, List } from 'antd';

const TodoList = () => {
  const [todoItems, addToDoItem] = useState([]);
  const [inputValue, handleChange] = useState('');

  useEffect(() => {
    alert('Welcome!')
  }, []);

  const addItem = e => {
    e.preventDefault();
    addToDoItem([...todoItems, inputValue]);
    handleChange('');
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
            renderItem={(item, i) => <List.Item key={i}>{item}</List.Item>}
          />
        </StyledTodoList>
        <StyledForm onSubmit={e => addItem(e)}>
          <Input
            value={inputValue}
            onChange={e => handleChange(e.target.value)}
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