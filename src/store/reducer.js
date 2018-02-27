/*eslint indent: ["error", 4, { "SwitchCase": 1 }]*/

const initialState = {
    counter: 0,
    result: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            };
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            };
        case 'STORE_RESULT':
            return {
                ...state,
                result: state.result.concat({
                    id: new Date(),
                    value: state.counter
                })
            };
        case 'DELETE_RESULT':
            const updatedArr = state.result.filter(
                result => result.id !== action.resultElId
            );
            return {
                ...state,
                result: updatedArr
            };
    }
    return state;
};

export default reducer;
