export const ContactActionType = {
    SET_PERSONS: 'SET_PERSONS',
};

export function setPersonsAction(persons) {
    return { type: ContactActionType.SET_PERSONS, payload: { persons } }
}

export function selectPersonPart(state) {
    return state.persons;
}

export function selectPersons(state) {
    return selectPersonPart(state).persons;
}

const initialState = {
    persons: [],
    answer: null
};

export default function (
    state = initialState,
    action
) {

    switch (action.type) {
        case ContactActionType.SET_PERSONS:
            return {
                ...state,
                persons: action.persons,
            };

        default:
            return state;
    }
}
