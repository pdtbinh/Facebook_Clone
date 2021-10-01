// Actions dictionary to look up dispatch input action type
export const actionTypes = {
    SET_USER: 'SET_USER',
};

// Initial context state
export const initialState = {
    user: null
};

// Dispatch function to update context state
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state
    } 
};

export default reducer;