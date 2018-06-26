import React, { Component } from 'react';
import '../css/Board.css';
import Seed from '../js/containers/seed';
import PlayerHome from './PlayerHome';
import PlayerBoard from './PlayerBoard';
import Track from './Track';
import Home from './Home';
import {connect} from 'react-redux';

class Board extends Component {

  createSeed(color){
    switch(color){
      case "blue":
          
           return this.props.PositionReducer.blue.map((items) => {
              let left = items.currentPosition.left;
              let top = items.currentPosition.top;
               return(
                   <Seed key={items.id} value={items} left={left} top={top} color={color}/>
               );
           })

      case "green":
          return this.props.PositionReducer.green.map((items) => {
            let left = items.currentPosition.left;
            let top = items.currentPosition.top;
              return(
                  <Seed key={items.id} value={items} left={left} top={top} color={color}/>
              );
          })

      case "yellow":
          return this.props.PositionReducer.yellow.map((items) => {
            let left = items.currentPosition.left;
            let top = items.currentPosition.top;
              return(
                  <Seed key={items.id} value={items} left={left} top={top} color={color}/>
              );
          })

      case "red":
          return this.props.PositionReducer.red.map((items) => {
            let left = items.currentPosition.left;
            let top = items.currentPosition.top;
              return(
                  <Seed key={items.id} value={items} left={left} top={top} color={color}/>
              );
          })
      
    }
  }

  render() {
    return (
      <div className="Board">
          {this.createSeed("blue")}
          {this.createSeed("yellow")}
          {this.createSeed("red")}
          {this.createSeed("green")}
        <PlayerBoard />
        <Home />
        <PlayerHome color="blue"/>
        <Track top="0cm" left="6cm"/>
        <Track top="9cm" left="6cm"/>
        <Track top="6cm" rotate="rotate(90deg)" left="6cm"/>
        <Track top="6cm" rotate="rotate(90deg)" left="15cm"/>
        <PlayerHome color="red" left="9cm" top="-6cm"/>
        <PlayerHome color="yellow" top="-3cm"/>
        <PlayerHome color="green" top="-9cm" left="9cm" />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
      PositionReducer: state.PositionReducer
  }
}
export default connect (mapStateToProps)(Board);
