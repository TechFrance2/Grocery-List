import React from 'react';
import Groceries from './Groceries'
import groceryItems from './groceryItems'
import './App.css'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        groceries: groceryItems,    
    };
    this.handleChange = this.handleChange.bind(this)
  }
    handleChange(id) {
      this.setState((prevState) => {
        const groceryUpdate = prevState.groceries.map((grocery) => {
          if (grocery.id === id) {
            grocery.completed = !grocery.completed;
          }
          return grocery;
        });

        return {
          groceries: groceryUpdate, 
        };
      });
    }
  
  render() {
    const grocery = this.state.groceries.map((item ) => (
    <Groceries key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div className= "shop-list">
         <h1> Grocery List </h1>
         {grocery}   
         
      </div>
    )
  } 
}

export default App;

