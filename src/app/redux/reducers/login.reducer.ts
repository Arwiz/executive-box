import actions from '../actions/login.action'

const initialState = {
    isLoggedIn: false,
    user: null
};

export default (previousState = initialState, action:any ) => {
    switch (action.type) {
        case actions.USER_LOGIN_SUCCESS:
            return Object.assign({}, {
                ...previousState,
                isLoggedIn: action.data.status,
                user: action.data.returnResponse
            })
        case actions.USER_LOGIN_FAIL:
            return previousState;
        default: {
            return previousState
        }
    }
};
