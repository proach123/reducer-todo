import React from 'react';

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      listText: 'pat'
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      listText: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch({type: 'ADD_ITEM', payload: this.state.listText});
  };

  render() {
      console.log(this.props)
      console.log(this.state.listText)
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="item"
          value={this.state.listText}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
