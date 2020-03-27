import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
 

   
    render() { 
      
        
       
        return ( 
            <div>
                {this.props.counters.length > 0 &&
                <button className="btn btn-primary btn-sm m-2"
                        onClick={this.props.handleReset}
                
                >
                    Reset
                </button>
                }
                {
                    this.props.counters.map( counter => 

                        <Counter  key = {counter.id}
                                  counter = {counter}
                                  onIncrement = {this.props.handleIncrement}
                                  onDecrement = {this.props.handleDecrement}
                                  onDelete = {this.props.handleDelete}

                         />

                    )
                }
            </div>
         );
    }
}
 
export default Counters;