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
            
            switch(action.color){
                case 'yellow':
                return Object.assign({}, state,  state.yellow[action.id].currentPosition = action.payload);

                case 'red':
                return Object.assign({}, state,  state.red[action.id].currentPosition = action.payload);

                case 'green':
                return Object.assign({}, state,  state.green[action.id].currentPosition = action.payload)

                case 'blue':
                return Object.assign({}, state,  state.blue[action.id].currentPosition = action.payload)
            }
        
        case 'MOVE_SEED':
            switch(action.color){
                case 'blue':
                return Object.assign({}, state,  state.blue[action.id].currentPosition = action.payload)

                case 'red':
                return Object.assign({}, state,  state.red[action.id].currentPosition = action.payload)

                case 'yellow':
                return Object.assign({}, state,  state.yellow[action.id].currentPosition = action.payload)

                case 'green':
                return Object.assign({}, state,  state.green[action.id].currentPosition = action.payload)
            }

        default:
        return state;
    }
}