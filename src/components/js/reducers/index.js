import {combineReducers} from 'redux';
import CurrentPositionReducer from './CurrentPosition-Reducer';
import PlayerHomeReducer from './constantposition-reducer';
import DiceReducer from './dice-reducer';
import OccupiedReducer from './OccupiedReducer';

const allReducers = combineReducers({
    
    PositionReducer: CurrentPositionReducer,
    PlayerHome: PlayerHomeReducer,
    Dice: DiceReducer,
    Occupied: OccupiedReducer,
})

export default allReducers;