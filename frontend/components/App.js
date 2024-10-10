import React from 'react'



export default class App extends React.Component {
  state={
    todos: initialTodos
  }

  addToDo = (name) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({ id: getId(), completed: false, name})
    })
  }

  toggleCompletion = id => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(td => {
        if(id == td.id) return { ...td, completed: !td.completed}
        return td
      })
    })
  }


  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion}>
          <Form addTodo={this.addTodo}
      </div>
    )
  }
}
