import React, { Component } from 'react';

import './App.css';
import Navigation from './components/Navigation.component';
import TodoForm from './components/TodoForm.component';
import TaskCard from './components/TaskCard.component';
import {tasks} from './models/tasks.json';
import EditTaskCard from './components/EditTaskCard.component';
//modal
import Modal from './components/Modal';
import {Button} from './components/Buttons';
import ModalDialog from './components/Modal';
import portal from './components/Modal';
//import chainedFunction from 'chained-function';


class App extends Component {
  constructor() {
    super();
    this.state = { 
      tasks,     
      modal: {
        name: '',
        params: {show:false,
            size:'xm'} },
        task:{}
    
      }
      this.closeMode = this.closeMode.bind(this);
      this.handleAddTodo = this.handleAddTodo.bind(this);
  }
 

  handleAddTodo(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    })   
  }

  removeTodo(index) {
    this.setState({
      tasks: this.state.tasks.filter((e, i) => {
        return i !== index
      })
    });
    
  }
   
/*//////////////////// */
closeMode(){
    this.setState({
        modal: {
            name: '',
            params: {
                show:false
            }
        }
    });
}



editTodo(id,task){
    this.setState({
          modal: {
            name: '',
            params: {
                show: true,
                size:'xm'}
            },
            task:task
    });
    console.log('en la edit',task)
  
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
{/************************************************************************ */}
        <EditTaskCard activate={this.state.modal.params.show}  editTask={this.state.task}  closeMode={this.closeMode}/>
 
      </div>
    );
  }
}

export default App;
