import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ClickSeed} from '../actions/ClickSeed';
import {MoveSeed} from '../actions/MoveSeed';

class Seed extends Component{
    
    constructor(props){
        super(props)
    }
    
    Click(event){
        event.persist()
        let left = event.target.style.left;
        let top = event.target.style.top;
        let distance = parseInt(this.props.Dice.value1);
       

        switch(event.target.style.backgroundColor){
            case 'blue':
                if ( left == this.props.PlayerHome.blue[this.props.value.id].playerhomeposition.left && top == this.props.PlayerHome.blue[this.props.value.id].playerhomeposition.top){ 
                    if (distance < 6){
                        break;
                    } 
                    this.props.ClickSeed(this.props.value, this.props.color)
                }
                else{
                    
                    if (distance == 0){
                        break;
                    }
                    let counter = distance;
                    let increment = 0;
                   
                    let interval = setInterval(()=>{
                        increment++;
                         
                        if (increment == counter){
                            clearInterval(interval)
                        }

                        let left = event.target.style.left;
                        let top = event.target.style.top;
                        let intLeft = parseInt(left);
                        let intTop = parseInt(top);
                        this.props.MoveSeed(this.props.value, this.props.color, intLeft, intTop)   
                    }, 200)
                }
                break;
            
            case 'red':
                if ( left == this.props.PlayerHome.red[this.props.value.id].playerhomeposition.left && top == this.props.PlayerHome.red[this.props.value.id].playerhomeposition.top){
                    if (distance < 6){
                        break;
                    } 
                    this.props.ClickSeed(this.props.value, this.props.color)
                }
                else{
                    
                    if (distance == 0){
                        break;
                    }
                    let counter = distance;
                    let increment = 0;
                   
                    let interval = setInterval(()=>{
                        increment++;
                         
                        if (increment == counter){
                            clearInterval(interval)
                        }

                        let left = event.target.style.left;
                        let top = event.target.style.top;
                        let intLeft = parseInt(left);
                        let intTop = parseInt(top);
                        this.props.MoveSeed(this.props.value, this.props.color, intLeft, intTop)   
                    }, 200)
                }
                break;


            case 'yellow':
                
                if ( left == this.props.PlayerHome.yellow[this.props.value.id].playerhomeposition.left && top == this.props.PlayerHome.yellow[this.props.value.id].playerhomeposition.top){
                    if (distance < 6){
                        break;
                    }  
                    this.props.ClickSeed(this.props.value, this.props.color)
                }
                else{
                    
                    if (distance == 0){
                        break;
                    }
                    let counter = distance;
                    let increment = 0;
                    let interval = setInterval(()=>{

                        increment++;
                         
                        if (increment == counter){
                            clearInterval(interval)
                        }
                        let left = event.target.style.left;
                        let top = event.target.style.top;
                        let intLeft = parseInt(left);
                        let intTop = parseInt(top);
                        this.props.MoveSeed(this.props.value, this.props.color, intLeft, intTop)   
                    }, 200)
                }
            break;

            case 'green':
               
                if ( left == this.props.PlayerHome.green[this.props.value.id].playerhomeposition.left && top == this.props.PlayerHome.green[this.props.value.id].playerhomeposition.top){
                    if (distance < 6){
                        break;  
                    }
                    this.props.ClickSeed(this.props.value, this.props.color)
                }
                else{
                    
                    if (distance == 0){
                        break;
                    }
                    let counter = distance;
                    let increment = 0;
                   
                    let interval = setInterval(()=>{
                        increment++;
                         
                        if (increment == counter){
                            clearInterval(interval)
                        }

                        let left = event.target.style.left;
                        let top = event.target.style.top;
                        let intLeft = parseInt(left);
                        let intTop = parseInt(top);
                        this.props.MoveSeed(this.props.value, this.props.color, intLeft, intTop)   
                    }, 200)
                }
            break;
        }
        
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
                <div onClick={this.Click.bind(this)} style={style}></div> 
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            ClickSeed: ClickSeed,
            MoveSeed:  MoveSeed,
    
       }, dispatch);
}
function mapStateToProps(state){
    return{
        
        PositionReducer: state.PositionReducer,
        PlayerHome: state.PlayerHome,
        Dice: state.Dice,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Seed);