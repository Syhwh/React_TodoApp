import React, { Component } from 'react';
import Modal from './Modal';
import {Button} from './Buttons';

class Formprueba extends Component{
 constructor(props){
     super(props);
     this.state={
        title:'',
        responsible:'',
        description: '',
        priority: this.props.elemento.priority
     }
     this.handleInputChange = this.handleInputChange.bind(this);

 }

 
handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }
render()
{
    return(<div> 

        <div className="card">
                <div className="card-body">
                    <form className="card-body">
                    <div className="form-group">
                    <label >Title</label>
                        <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={ this.state.title}
                        onChange={this.handleInputChange}
                        placeholder={this.props.elemento.title }
                        />
                    </div>
                    <div className="form-group">
                    <label>Responsible</label>
                        <input
                        type="text"
                        name="responsible"
                        className="form-control"
                        value={this.state.responsible}
                        onChange={this.handleInputChange}
                        placeholder={this.props.elemento.responsible}
                        />
                    </div>
                    <div className="form-group">
                    <label >Description</label>
                        <textarea name="description"
                        className="form-control"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        placeholder={this.props.elemento.description}>
                        </textarea>
                    </div>
                    <div className="form-group">
                    <label >Priority</label>
                        <select
                        name="priority"
                        className="form-control"
                        value={this.state.priority}
                        onChange={this.handleInputChange}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                        </select>
                    </div>
                    </form>
            </div>
            </div>
            
    </div>
    );

}}
export default Formprueba