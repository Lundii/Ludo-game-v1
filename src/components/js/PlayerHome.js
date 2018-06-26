import React from 'react';
import '../css/playerhome.css';

function PlayerHome(props){
    let style= {
        backgroundColor: `${props.color}`,
        left: `${props.left}`, 
        top:`${props.top}`
    }
    return(
        <div className="playerhome" style={style}>
            <div className="inner-box"></div>
        </div>  
    )
}
export default PlayerHome;