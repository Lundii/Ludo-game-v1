import {combineReducers} from 'redux';
import PositionTestReducer from './positiontest-reducer';
import PlayerHomeReducer from './constantposition-reducer';
import DiceReducer from './dice-reducer';

const allReducers = combineReducers({
    
    PositionReducer: PositionTestReducer,
    PlayerHome: PlayerHomeReducer,
    Dice: DiceReducer
})

export default allReducers;