import React from 'react';

function Panel(props){
    let style= {
        position: 'absolute',
        width: "1cm",
        height: "1cm",
        boarder: "1px solid black",
        backgroundColor: `${props.color}`,
        left: `${props.left}`, 
        top:`${props.top}`,
        
    }
    return(
        <div  style={style}>
        </div>  
    )
}
export default Panel;