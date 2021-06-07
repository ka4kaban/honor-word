export const ContactActionType = {
    SET_PERSONS: 'SET_PERSONS',
};

export function setPersonsAction(persons) {
    return { type: ContactActionType.SET_PERSONS, payload: { persons } }
}

export function selectArticlePart(state) {
    return state.articles;
}

export function selectPersons(state) {
    return selectArticlePart(state).persons;
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
        case ContactActionType.SET_ARTICLES:
            return {
                ...state,
                persons: action.persons,
            };

        default:
            return state;
    }
}
