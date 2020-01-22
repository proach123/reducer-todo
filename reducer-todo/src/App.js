import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {

 
  constructor(){
    super()
    this.state = {list:list}
  }

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newItem]
    });
  };

  toggleId = id => {
    const newList = this.state.list.map(item => {
      if(item.id === id){
      return {
        ...item,
        completed: !item.completed
      }} else {return item
      }
    });

    this.setState({
      list: newList
    })
  }

  clearCompleted = id => {
    const filteredList = this.state.list.filter(item => {
      return (!item.completed)
    })
  console.log(filteredList,'working')
  
  this.setState({list:filteredList})
  }

  render() {

    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        </div>

        <TodoList list={this.state.list} toggleId={this.toggleId} clearCompleted={this.clearCompleted} />

      </div>
    );
  }
}

export default App;
