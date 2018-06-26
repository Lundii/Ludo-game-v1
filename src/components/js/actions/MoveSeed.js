export const MoveSeed = (items, color, le, to) => {
   
  var payload;
  var posleft = le;
  var postop = to;
  var left = posleft+"cm";
  var top = postop+"cm";

       if (left === "5cm"){
           if(top == "8cm"){
               move('left');
           }   
           else{
               move('upright')
           }
       }

       else if (left === "6cm"){
           
           if (top === "0cm"){
               move('right');
           }
           else if(top === "9cm"){
               move('upleft');
           }
           else{
               move('up');
           }
       }

       else if (left === "8cm"){
           if(top === "5cm"){
               move('downright');
           }
           else if (top === "14cm"){
               move('left');
           }
           else{
           move('down');
           }
       }
       
       else if(left === "14cm"){
           if (top === "8cm"){
               move('left');
           }
           else{
               move('down');
           }
       }

       else if(left === "1cm"){
           if(top === "6cm"){
               move('right')
           }
           else if(top === "8cm"){
               move('left')
           }
           else{
               move('up');
           }
       }
       
       else if(top === "8cm"){
           if (left === "9cm"){
               move('downleft');
           }
           else if(left === "0cm"){
               move('up')
           }
           else{
               move('left');
           }
       }
       
       else if(top === "7cm"){
           move('up')
       }

       else if(top === "14cm"){
           move('left');
       }
           
       else {
           move('right');
           
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
           case 'upright':
               postop--;
               posleft++;
               break;
           case 'downleft':
               postop++;
               posleft--;
               break;
           case 'upleft':
               postop--;
               posleft--;
               break;
           case 'downright':
               postop++;
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
