import React from 'react';
import PropTypes from 'prop-types';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class Home extends React.Component{
    
     constructor(){
        super();
        this.state={
            tasks: ["Run to the store", "Go to the gym", "Get some sleep"],
            value: ''
            
        };
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        //this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }
    
    onChange(event) {
        this.setState({value: event.target.value});
        if(event.keyCode === 13){
            let temp = this.state.tasks;
            temp.push(this.state.value);
            this.setState({ tasks: temp});
        }else{ 
            this.setState({value: event.target.value});
        }
    }
    
    onSubmit(event) {
        event.preventDefault();
        let temp = this.state.tasks;
        temp.push(this.state.value);
        this.setState({ tasks: temp});
        
    }
 
    handleRemoveItem(index) {
      this.setState({
        tasks: this.state.tasks.filter(function(e, i) {
          return i !== index;
        })
      });
    }   

    
        

    
    render(){
        return (
            <div className="container col-md-6">
                <h1>To Do List ({this.state.tasks.length})</h1>
                <form className="TodoList" onSubmit={this.onSubmit} >
                    <input type="text" value={this.state.value} onChange={this.onChange} placeholder="Enter Task">
                    </input>
                    <ul className="list-group" id="myUL">
                        {
                             this.state.tasks.map( (item, index) => {
                                  return <Tasks item={item} key={index} index={index} clickEvent={ (val) => this.handleRemoveItem(val)} />;
                            })
                        }
                    </ul>
                </form>
            </div>  
        );
    }
}


function Tasks(props) {
    return <li className="list-group-item">
        {props.item}
        <button type="button" className="close" onClick={() => props.clickEvent(props.index)}>×</button>
    </li>;
}
Tasks.propTypes = {
    item:PropTypes.string,
    clickEvent:PropTypes.func,
    index:PropTypes.number,
    tasksCount:PropTypes.number
};

function Title (props) {
  return (
      <div>
          <div>
              <h1>To Do List! ({this.props.tasksCount})</h1>
          </div>
      </div>
          );
}