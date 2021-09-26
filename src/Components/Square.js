import React from 'react';
import "../App.css"

function Square({value, chooseSquare, position, positionLtl}) {
let needClick = () =>{
    if(value===""){
        chooseSquare();
    }
}
    return (
        <div className={"square " + position}>
            <div className={"square_ltl " + positionLtl} onClick={()=>{needClick()}}>
                {value}
            </div>
        </div>
    );
}

export default Square;