import React from 'react';
import Form from './components/TodoForm'
import ToDoList from './components/TodoList'


const list = [
  {
    task: 'finish assignment',
    id: 123,
    completed: false,
  },
]
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: list,
    };
  }

  toggleItem = (id) => {
    const newList = this.state.list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } 
        else {
          return item;
        }
    });
    this.setState({
      list: [
        ...this.state.list,
        {
          task: itemname,
          id: Date.now(),
          completed: false,
        },
      ],
    });
  };
  

  clearCompleted = (e) => {
    this.setState({
      list: this.state.list.filter((item) => !item.completed),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Form addItem={this.addItem} />
        <ToDoList
          clearCompleted = {this.clearCompleted}
          toggleItem = {this.toggleItem}
          list = {this.state.list}
        />
      </div>
    );
  }
}

export default App;
