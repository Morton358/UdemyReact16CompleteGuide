/*eslint indent: ["error", 4, { "SwitchCase": 1 }]*/

import * as actionTypes from '../actions/actionTypes';

const initialState = {
    result: []
};

const reducer = (state = initialState, action) => {
    let updatedArr = null
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                result: state.result.concat({
                    id: new Date(),
                    value: action.result
                })
            };
        case actionTypes.DELETE_RESULT:
            updatedArr = state.result.filter(
                result => result.id !== action.resultElId
            );
            return {
                ...state,
                result: updatedArr
            };
        default:
            return state;
    }
};

export default reducer;
