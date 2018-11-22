import React, { Component } from 'react';
import Modal from './Modal';
import {Button} from './Buttons';
import Formprueba from './Formprueba';


class EditTaskCard extends Component{
    constructor(props){      
        super(props);  
        this.state = {               
            modal: {
              name: '',
              params: {show:false,//false,
                  size:'xm'} }
             }    
        this.closeModal = this.closeModal.bind(this);
    }

    
    



    componentDidMount(props){
        console.log('estado del show', this.state.modal.params.show)
        console.log('Props ventana', this.props)
        }
   
    openModal = () => {
        //this.setState({
           // this.props.show:false
          //  }
        //});
    };
    
    
closeModal  () { 
    this.setState({
        modal: {
            name: '',
            params: {show:false,//false,
                size:'xm'} }
                
     });
    this.props.closeMode()
        console.log('estado', this.state);
    console.log('prop de edit', this.props.editTask);
    };
   


render(){
    return(<div> 
        
        <Modal  show={this.props.activate} onClose={this.closeModal}  >
        <Modal.Header>
            <Modal.Title>
              <h3>Editing: <span> {this.props.editTask.title} </span></h3>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body padding>
            <Formprueba  elemento={this.props.editTask}/>
        </Modal.Body>
        <Modal.Footer>
            <Button
                btnStyle="primary"
               onClick={this.closeModal}
            >
                Save
            </Button>
            <Button
                btnStyle="default"
                onClick={this.closeModal}
            >
                Close
            </Button>
        </Modal.Footer>
    </Modal>
        </div>
    )
    }

}
export default EditTaskCard;