import React from 'react';

function Home(){
    let style = {
        width: "3cm",
        height: "3cm",
        position: "absolute",
        zIndex: "0",
        top: "6cm",
        left: "6cm",
        border: "0.02px solid black",
        backgroundColor: "black"
    }

   return(
       <div style={style}></div>
   )
}

export default Home;