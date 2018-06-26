import React from 'react';

import '../css/column.css';

function Row(props){

    let style = {
        width: "1cm",
        height: "1cm",
        border: "0.02px solid black",
    }

   return (
       <div style = {style}></div>
   )
}
function Column(props){

     return(
         <div className="column" style={{left: `${props.left}`}}>
             <Row/>
             <Row/>
             <Row/>
             <Row/>
             <Row/>
             <Row/>
         </div>
     )
}


function Track(props){
    let style = {
        position: "absolute", 
        left: `${props.left}`,
        top: `${props.top}`, 
        transform: `${props.rotate}`
    }
    return(
        <div style={style}>
            <Column left="0cm"/>
            <Column left="1cm"/>
            <Column left="2cm"/>
        </div>
    )
}

export default Track;