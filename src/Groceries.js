import React from 'react'


function Groceries(props) {
    return (
        <div className= "shoplist">
           
            <p> 
            <input type= "checkbox" checked= {props.item.completed} />
             {props.item.text} </p>
            
        </div>
    )
}




export default Groceries


