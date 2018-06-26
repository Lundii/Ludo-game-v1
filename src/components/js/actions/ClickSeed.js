export const ClickSeed = (items, color) => {
   
    var payload
    switch(color){
        case "blue": 
            payload = {
                left: "1cm",
                top: "6cm"
            }
            break;

        case "red": 
            payload = {
                left: "8cm",
                top: "1cm"
            }
            break;

        case "green": 
            payload = {
                left: "13cm",
                top: "8cm"
            }
            break;
        case "yellow": 
            payload = {
                left: "6cm",
                top: "13cm"
            }
            break;
           
    }
    return {
       type: "SEED_CLICKED",
       id: items.id,
       color: color,
       payload: payload
    }
}