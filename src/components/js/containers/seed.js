import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ClickSeed} from '../actions/index';
import {MoveSeed} from '../actions/MoveSeed';
import {DiceClicked} from '../actions/index'
import {AddOccupied} from '../actions/index';
import {RemoveOccupied} from '../actions/index';
import {ReturnHome} from '../actions/index';
import {MoveToHome} from '../actions/MoveToHome';

class Seed extends Component{
    
    constructor(props){
        super(props)
    }
    
    SeedClicked(event){
        event.persist()
        let left = event.target.style.left;
        let top = event.target.style.top;
        let dicevalue = parseInt(this.props.Dice.value1);
        let color = event.target.style.backgroundColor;
        
        this.props.Occupied.forEach((items, index) => {
            if ( items.color == color && items.id == this.props.value.id ){
                this.Remove_Occupied(index);
            }
        })

        if ( left == this.props.PlayerHome[color][this.props.value.id].playerhomeposition.left && top == this.props.PlayerHome[color][this.props.value.id].playerhomeposition.top){
            if (dicevalue < 6){
                return;  
            }
            this.props.ClickSeed(this.props.value, this.props.color);
            this.props.DiceClicked({value: 0});
            this.Add_Occupied(color, event);
            console.log(this.props.Occupied);
        }
        else{   
            if (dicevalue == 0){
                return;
            }
            
            let increment = 0;
            let interval = setInterval(()=>{
                increment++; 
                if (increment == dicevalue){
                    clearInterval(interval);
                    this.props.DiceClicked({value: 0});
                    this.Add_Occupied(color, event);
                    console.log(event.target.style.top)
                    this.props.Occupied.forEach((items, index) => {
                        if((items.color != color) && (items.left == event.target.style.left) && (items.top == event.target.style.top)){
                              this.Remove_Occupied(index);
                              this.Remove_Occupied(this.props.Occupied.length-1)
                              this.props.ReturnHome(items.id, items.color, {left: this.props.PlayerHome[items.color][items.id].playerhomeposition.left, top: this.props.PlayerHome[items.color][items.id].playerhomeposition.top})
                              this.props.ReturnHome(this.props.value.id, color, {left: this.props.PlayerHome[color][this.props.value.id].outsidehomePosition.left, top: this.props.PlayerHome[color][this.props.value.id].outsidehomePosition.top})
                        }   
                    }
                    )
                    console.log(this.props.Occupied);
                }

                let left = event.target.style.left;
                let top = event.target.style.top;
                let intLeft = parseInt(left);
                let intTop = parseInt(top);

                switch(color){
                    case "blue": 
                    
                        if ( intLeft >= this.props.PlayerHome[color][this.props.value.id].moveTohome.left &&  intLeft <= 6 &&  intTop == this.props.PlayerHome[color][this.props.value.id].moveTohome.top){
                            this.props.MoveToHome(this.props.value,this.props.color,intLeft, intTop);
                        }
                        else
                            this.props.MoveSeed(this.props.value, this.props.color, intLeft, intTop) 
                    break;
                    case "green": 
                        if ( intLeft <= this.props.PlayerHome[color][this.props.value.id].moveTohome.left &&  intLeft >= 6 &&  intTop == this.props.PlayerHome[color][this.props.value.id].moveTohome.top){
                            this.props.MoveToHome(this.props.value,this.props.color,intLeft, intTop);
                        }
                        else
                            this.props.MoveSeed(this.props.value, this.props.color, intLeft, intTop) 
                    break;
                    
                    case "yellow": 
                        if ( intLeft == this.props.PlayerHome[color][this.props.value.id].moveTohome.left &&  intTop >= 6 &&  intTop <= this.props.PlayerHome[color][this.props.value.id].moveTohome.top){
                            this.props.MoveToHome(this.props.value,this.props.color,intLeft, intTop);
                        }
                        else
                            this.props.MoveSeed(this.props.value, this.props.color, intLeft, intTop) 
                    break;
                   
                    case "red": 
                        if ( intLeft == this.props.PlayerHome[color][this.props.value.id].moveTohome.left &&  intTop <= 6 &&  intTop >= this.props.PlayerHome[color][this.props.value.id].moveTohome.top){
                            this.props.MoveToHome(this.props.value,this.props.color,intLeft, intTop);
                        }
                        else
                            this.props.MoveSeed(this.props.value, this.props.color, intLeft, intTop) 
                    break;
                       
                    }
            }, 200)
        }
        
    }

    Add_Occupied(color, event){
        this.props.AddOccupied(
            {   
                color: color, 
                id: this.props.value.id,
                left: event.target.style.left, 
                top: event.target.style.top,
            }
        )
    }

    Remove_Occupied(index){
        this.props.RemoveOccupied(index);
    }
   
    Return_Home(){

    }
    
    render(){
        let style ={   
            height: "1cm",
            width: "1cm",
            position: "absolute",
            borderRadius: "50%",
            left: `${this.props.left}`,
            backgroundColor: `${this.props.color}`,
            top: `${this.props.top}`,
            zIndex: "1"   
        }
        return(
            <div>
                <div onClick={this.SeedClicked.bind(this)} style={style}></div> 
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            ClickSeed: ClickSeed,
            MoveSeed:  MoveSeed,
            DiceClicked: DiceClicked,
            AddOccupied: AddOccupied,
            RemoveOccupied: RemoveOccupied,
            ReturnHome: ReturnHome,
            MoveToHome:  MoveToHome
    
       }, dispatch);
}
function mapStateToProps(state){
    return{
        PositionReducer: state.PositionReducer,
        PlayerHome: state.PlayerHome,
        Dice: state.Dice,
        Occupied: state.Occupied
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Seed);