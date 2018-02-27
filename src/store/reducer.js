import * as actionTypes from './actions';
/*eslint indent: ["error", 4, { "SwitchCase": 1 }]*/

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {

    if (action.type === actionTypes.ADD_PERSON) {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: action.personData.name,
            age: action.personData.age
        };
        return {
            persons: state.persons.concat(newPerson)
        }
    }

    if (action.type === actionTypes.DELETE_PERSON) {
        return {
            persons: state.persons.filter(
                person => person.id !== action.personId
            )
        }
    }
    return state
}

export default reducer;
