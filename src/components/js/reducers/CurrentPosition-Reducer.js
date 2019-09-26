const initialState = {
    
        blue: [
            {
               id: 0,
               currentPosition: {
                   top: "1.5cm",
                   left: "1.5cm"
               }
            },
            {
               id: 1,
               currentPosition: {
                   top: "1.5cm",
                   left: "3.5cm"
               }
            },
            {
               id: 2,
               currentPosition: {
                   top: "3.5cm",
                   left: "1.5cm"
               }
            },
            { 
               id: 3,
               currentPosition: {
                   top: "3.5cm",
                   left: "3.5cm"
               }
            }
        ],

        red: [
           {
               id: 0,
               currentPosition: {
               top: "1.5cm",
               left: "10.5cm"
               }
           },
           {
               id: 1,
               currentPosition: {
                   top: "1.5cm",
                   left: "12.5cm"
               }
           },
           {
               id: 2,
               currentPosition: {
                   top: "3.5cm",
                   left: "10.5cm"
               }
           },
           { 
               id: 3,
               currentPosition: {
                   top: "3.5cm",
                   left: "12.5cm"
               }
           }
       ],

       yellow: [
           {
               id: 0,
               currentPosition: {
                   top: "10.5cm",
                   left: "1.5cm"
               },
           },
           {
               id: 1,
               currentPosition: {
                   top: "10.5cm",
                   left: "3.5cm"
               },
           },
           {
               id: 2,
               currentPosition: {
                   top: "12.5cm",
                   left: "1.5cm"
               },
           },
           { 
               id: 3,
               currentPosition: {
                   top: "12.5cm",
                   left: "3.5cm"
               },
           }
       ],

       green: [
           {
               id: 0,
               currentPosition: {
                   top: "10.5cm",
                   left: "10.5cm"
               },
           },
           {
               id: 1,
               currentPosition: {
                   top: "10.5cm",
                   left: "12.5cm"
               },
           },
           {
               id: 2,
               currentPosition: {
                   top: "12.5cm",
                   left: "10.5cm"
               },
           },
           { 
               id: 3,
               currentPosition: {
                   top: "12.5cm",
                   left: "12.5cm"
               },
           }
       ]
       
}

export default function(state=initialState, action){
    switch(action.type){
        case 'SEED_CLICKED':
                 return Object.assign({}, state,  state[action.color][action.id].currentPosition = action.payload);
        case 'MOVE_SEED':
                 return Object.assign({}, state,  state[action.color][action.id].currentPosition = action.payload);
        case 'RETURN_HOME': 
                 return Object.assign({}, state,  state[action.color][action.id].currentPosition = action.payload);

        default:
        return state;
    }
}