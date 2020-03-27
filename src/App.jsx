import React, { Component } from 'react';
import Counters from  './components/counters'
import './App.css';
import NavBar from './components/navbar';


 
class App extends Component {
    state = {
        counters : [
            {id: 1 , value: 0},
            {id: 2 , value: 1},
            {id: 3 , value: 2},
            {id: 4 , value: 3},

        ]
    }

    
    handleIncrement = (counter) => {
        const counters = [...this.state.counters];   
        const index = counters.indexOf(counter);
        counters[index].value++;
        counter = {...counter};
        return this.setState({counters});

        };

        handleDecrement = (counter) => {
            const counters = [...this.state.counters];   
            const index = counters.indexOf(counter);
            counters[index].value--;
            counter = {...counter};
            return this.setState({counters});
    
            };

        handleDelete = (counter) => {
            const counters = (this.state.counters.filter( c => c.id !== counter.id));
            console.log(counters)
             this.setState({counters})
        };

        handleReset = () => {
            const {counters} =this.state;
           counters.map(c => {

               c.value =0
               return c
           });
             this.setState({counters })
        };
    
    render() { 
        const totalCounters = this.state.counters.filter(c => c.value > 0).length ;
      
        return (  
          
          <React.Fragment>
               <NavBar totalCounter = {totalCounters} />
               <main className="container">
                 <Counters counters = {this.state.counters} 
                           handleIncrement = {this.handleIncrement}
                           handleDecrement ={this.handleDecrement}
                           handleDelete={this.handleDelete}
                           handleReset={this.handleReset}
                           
                        
                        />
               </main>
          </React.Fragment>
            
        );
    }
}
 
export default App;
