import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {DiceClicked} from '../js/actions/index';
import '../css/playerboard.css';

class PlayerBoard extends Component {
    constructor(props){
       super(props);
    }

    Dice(dice){
        var payload = {
            value1: document.getElementById(`${dice}`).innerHTML
        }
        document.getElementById(`${dice}`).style.backgroundColor = "#aaaaaa";
        document.getElementById(`${dice}`).disabled = true;
        this.props.DiceClicked(payload);
        
    }

    clicked(){
        document.getElementById('dice1').style.backgroundColor = "white";
        document.getElementById('dice1').disabled = false;
        document.getElementById('dice2').style.backgroundColor = "white";
        document.getElementById('dice2').disabled = false;


       let interval = setInterval(()=>{
            let dice1 = Math.floor(Math.random() * (7 - 1) ) + 1;
            let dice2 = Math.floor(Math.random() * (7 - 1) ) + 1;
    
            document.getElementById('dice1').innerHTML = dice1;
            document.getElementById('dice2').innerHTML = dice2;
        }, 50)

        setTimeout(()=>{
            clearInterval(interval);
        }, 500)
       
    }
 
    render(){
        
        return(
            <div className="main-div" style={{top: this.props.top}}>
               <div className="inner-div">
                  {/* <text>Player Name</text><br/> */}
                  <text>Dice 1</text>
                  <button onClick={this.Dice.bind(this,"dice1")} id="dice1">0</button><br/>
                  <text>Dice 2</text>
                  <button onClick={this.Dice.bind(this,"dice2")} id="dice2">0</button><br/>
                  <button onClick={this.clicked.bind(this)} id="roll">Roll Dice</button>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
          DiceClicked: DiceClicked,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(PlayerBoard);