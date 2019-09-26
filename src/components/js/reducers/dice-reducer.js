// export default function(){
//     return {
//         player1: {
//             color: {

//             }
//         }
//     }
// }

const initialState = {
    value: 0,
}

export default function( state=initialState, action){
     switch (action.type){
         case "DICE_CLICKED":
             return Object.assign({}, state, action.payload);
         default:
             return state;
     }
}