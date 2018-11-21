import React,{Component} from 'react';
//import logo from '../logo.svg';


class Navigation extends Component{
   
render(){
    return(
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.props.number}
            </span>
          </a>
        </nav>  
        )
    }
}
export default Navigation;