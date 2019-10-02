import React from 'react';
import { StyledContainer, StyledTodoList, StyledInfo, StyledForm } from './styles';
import { Button, Icon, Input, List } from 'antd';

class TodoList extends React.Component {
  state = {
    todoItems: [],
    inputValue: '',
  }

  componentDidMount(){
    alert('Welcome!')
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  }

  addToDoItem = e => {
    e.preventDefault();
    const { todoItems, inputValue } = this.state;

    const newTodoItems = todoItems.concat(inputValue);

    this.setState({
      todoItems: newTodoItems,
      inputValue: ''
    });
  }

  render() {
    const { todoItems, inputValue } = this.state;
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
          <StyledForm onSubmit={e => this.addToDoItem(e)}>
            <Input
              value={inputValue}
              onChange={e => this.handleChange(e)}
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
}

export default TodoList;