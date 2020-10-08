import React from "react";


function UsersData(props){
    function handleClick(){
        alert ("Hello " + props.contantCard.name)
    }

    return(
        <div className = "contantCard">
            <hr />
            <img className="sizaOfImage" src={props.contantCard.imgUrl}/>
            <b><p>{props.contantCard.name}</p></b>
            <p>Phone number: {props.contantCard.phone}</p>
            <p>Email: {props.contantCard.email}</p>
            <button className="btnStyle" onClick={handleClick}>Click me{props.contantCard.button}</button>
        </div>
    )
}
export default UsersData