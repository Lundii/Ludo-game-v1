let initialState = [{}];

export default function(state = initialState, action){
   
    switch(action.type){
        case 'ADD_OCCUPIED': 
             return state.concat(action.payload);
        case 'REMOVE_OCCUPIED':
             return state.filter((element,index) => index != action.payload);
        default:
             return state;
    }
      
}