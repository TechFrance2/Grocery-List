import React from 'react';
import Groceries from './Groceries'
import groceryItems from './groceryItems'
import './App.css'



function App() {
  const groceryShop = groceryItems.map(item => <Groceries key= {item.id} item={item} />)

  return (
    <div className= "shop-list">
       <h1> Grocery List </h1>
       {groceryShop}   
       
    </div>
  );
}

export default App;
