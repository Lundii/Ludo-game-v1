import React from 'react';

import '../css/column.css';
import '../css/row.css';
import Panel from './panel';

function Row(props){

   return (
       <div className="row" style={{backgroundColor: `${props.color}`}}></div>
   )
}
function Column(props){
        
       
     return(
         <div className="column" style={{left: `${props.left}`, backgroundColor: `${props.color}`}}>
             <Row/>
             <Row/>
             <Row/>
             <Row/>
             <Row/>
             <Row color="gray"/>
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
            <Panel left="0cm" top="4cm" color={props.color}/>
            <Column left="1cm" color={props.color}/>
            <Column left="2cm"/>
            
        </div> 
    )
}

export default Track;