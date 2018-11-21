import React, {Component} from 'react';

class TodoForm extends Component{
constructor(props){
    super(props);
    this.state={
        title:'',
        responsible:'',
        description: '',
        priority: 'Low'
    }
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
componentDidMount(){
    console.log('estado del form', this.state)
    }


handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
        title:'',
     responsible: '',
     description: '',
     priority: 'Low'
    });
    console.log('El estado', this.state);
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }
    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <h5  className="card-title">Task</h5>
                    <form onSubmit={this.handleSubmit} className="card-body">
                    <div className="form-group">
                        <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={this.props.title || this.state.title}
                        onChange={this.handleInputChange}
                        placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="responsible"
                        className="form-control"
                        value={this.props.responsible || this.state.responsible }
                        onChange={this.handleInputChange}
                        placeholder="Responsible"
                        />
                    </div>
                    <div className="form-group">
                        <textarea name="description"
                        className="form-control"
                        value={this.props.description || this.state.description}
                        onChange={this.handleInputChange}
                        placeholder="Description">
                        </textarea>
                    </div>
                    <div className="form-group">
                        <select
                        name="priority"
                        className="form-control"
                        value={this.props.priority || this.state.priority}
                        onChange={this.handleInputChange}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                    Save
                    </button>
                </form>
            </div>
         </div>
        )
    }
}

export default TodoForm ;