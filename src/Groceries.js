import React from 'react'


function Groceries(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
    };
    
  return (
    <div className= "shoplist">
      <input 
        type= "checkbox" 
        checked= {props.item.completed} 
        onChange = {() => props.handleChange(props.item.id)}
     />

     <p style= {props.item.completed ? completedStyle : null}>
        {" "} 
        {props.item.text} {" "} 
     </p>
 </div>
 )
}

export default Groceries


