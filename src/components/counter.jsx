import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value : this.props.counter.value,
        
     }

    
     
    render() { 
        
        const {counter,onIncrement,onDecrement,onDelete  } = this.props;

        
        return ( 
            <div className ="row">
                <div className="col-1">

                   <span className={ this.getBadgeClass(counter.value)}>{this.formatCount(counter.value)}</span>
                </div>
                <div className="col">

                <button 
                        className="btn btn-secondary btn-sm" 
                        onClick ={() => onIncrement(counter)}
                >
                    +
                </button>

                <button 
                        disabled ={ (counter.value === 0) ? 'disbled' : ''}
                        className="btn btn-secondary btn-sm m-2" 
                        onClick ={() => onDecrement(counter)}
                >
                    -
                </button>

                <button 
                        className="btn btn-danger "
                        onClick ={() => onDelete(counter)}
                >
                    Delete
                </button>
                </div>
            </div>

         );
    }

    formatCount(values){
      const value =  (values === 0) ? 'zero' : values;
      return value;
    }

    getBadgeClass(values) {
        let classes = "badge badge-sm m-3 badge-";
        classes += (values === 0) ? 'warning' : 'primary';
        return classes;
    }
}
 
export default Counter;