/*eslint indent: ["error", 4, { "SwitchCase": 1 }]*/

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    // let newState = null
    switch (action.type) {
        case actionTypes.INCREMENT:
            // newState = Object.assign({}, state);
            // newState.counter = state.counter + 1;
            // return newState;
            return updateObject(state, { counter: state.counter + 1 });
        case actionTypes.DECREMENT:
            return updateObject(state, { counter: state.counter - 1 });
        case actionTypes.ADD:
            return updateObject(state, {
                counter: state.counter + action.value
            });
        case actionTypes.SUBTRACT:
            return updateObject(state, {
                counter: state.counter - action.value
            });
        default:
            return state;
    }
};

export default reducer;
