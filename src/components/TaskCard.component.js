import React,{Component} from 'react';

class TaskCard extends Component{
    render(){
        var priority;
        if (this.props.priority ==='Low'){
            priority="badge badge-pill badge-success ml-2";
          }else if (this.props.priority ==='Medium'){
            priority="badge badge-pill badge-warning ml-2";
          }else {
            priority="badge badge-pill badge-danger ml-2";
          }
        
        return (   
           
                <div className="col-md-4"  key={this.props.i}>
                <div className="card mt-4"id={this.props.i}>
                  <div className="card-header card-title text-center">
                    <h3>{this.props.title}</h3>
                    <span></span>
                    <span className={priority}>
                    {this.props.priority} priority
                    </span>
                  </div>
                  <div className="card-body">
                    <div>{this.props.description}</div> 
                    <div>< strong> {this.props.responsible}</strong></div>
                  </div>
                  <div className="card-footer">
                  <button onClick={this.props.editTodo }
                      className="btn btn-primary mr-2">                      
                      Edit
                    </button>
                    <button onClick={this.props.removeTodo}
                      className="btn btn-danger ">                      
                      Delete
                    </button>
                   
                  </div>
                </div>
              </div>
        )        
    }
}

export default TaskCard;
