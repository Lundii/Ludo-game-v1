 export const MoveToHome = (items, color, le, to) => {

  var payload;
  var posleft = le;
  var postop = to;
  var left = posleft+"cm";
  var top = postop+"cm";
   
     switch(color){
         case 'red':
             move('down');
             break;
         case 'green':
             move('left')
             break;
         case 'yellow':
             move('up')
             break;
         case 'blue':
             move('right')
             break;
     }

 
 // eslint-disable-next-line
 function move(type){
    switch(type){
        case 'up':
            postop--;
            break;
        case 'down':
            postop++;
            break;
        case 'left':
            posleft--;
            break;
        case 'right':
            posleft++;
            break;
    }
    
    top = postop + "cm";
    left = posleft + "cm"; 
    
    payload = {
        left: left,
        top: top
    }
}

    return{
        type: "MOVE_SEED",
        id: items.id,
        color: color,
        payload: payload
    }
 }