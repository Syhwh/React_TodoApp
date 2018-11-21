import React, { Component } from 'react';

import './App.css';
import Navigation from './components/Navigation.component';
import TodoForm from './components/TodoForm.component';
import TaskCard from './components/TaskCard.component';
import {tasks} from './models/tasks.json'


class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks,
      isEdit:false
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  componentDidMount(){
    console.log('estado del APP', this.state)
    }

  handleAddTodo(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
    console.log('Estado en padre',this.state);
  }

  removeTodo(index) {
    console.log('remove functions',index);
    this.setState({
      tasks: this.state.tasks.filter((e, i) => {
        return i !== index
      })
    });
    
  }

  editTodo(id,task){
    this.setState({isEdit:true})
    console.log('edit functions',id);
    console.log('Priority',task.priority);
    console.log(this.state.isEdit);  
}
  render() {
    return (
      <div className="App">
      <Navigation number={this.state.tasks.length}/>
       
       <div className="container">
       <div className="row ">
          <div className=" md-4 mt-4">
          <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
          </div>          
          <div className="col-md-8">
              <div className="row">
              {this.state.tasks.map((task, id) => {
						  return ( 							
                <TaskCard
                key={id}
                title={task.title}
                responsible={task.responsible}
                description={task.description}
                priority={task.priority}
                removeTodo={this.removeTodo.bind(this,id)}
                editTodo={this.editTodo.bind(this,id,task)} />
                )
                })
              }</div>
              </div>
           </div> 
        </div>
      </div>
    );
  }
}

export default App;
