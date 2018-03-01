/*eslint indent: ["error", 4, { "SwitchCase": 1 }]*/

import * as actionTypes from '../actions/actionTypes';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    let newState = null
    switch (action.type) {
        case actionTypes.INCREMENT:
            newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            };
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            };
        default:
            return state;
    }
};

export default reducer;
