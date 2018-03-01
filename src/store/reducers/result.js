/*eslint indent: ["error", 4, { "SwitchCase": 1 }]*/

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    result: []
};

const deleteResult = (state, action) => {
    const updatedArr = state.result.filter(
        result => result.id !== action.resultElId
    );
    return updateObject(state, { result: updatedArr });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {
                result: state.result.concat({
                    id: new Date(),
                    value: action.result
                })
            });
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }
};

export default reducer;
