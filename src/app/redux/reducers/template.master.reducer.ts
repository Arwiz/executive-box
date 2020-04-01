import templateMasterActions from '../actions/template.master.action'

const initialState = {
    productList: [],
};

export default (previousState = initialState, action:any ) => {
    switch (action.type) {
        case templateMasterActions.USER_LOGIN_SUCCESS:
            return Object.assign({}, {
                ...previousState,
                productList: action.data
            })
        case templateMasterActions.USER_LOGIN_FAIL:
            return previousState;
        default: {
            return previousState
        }
    }
};
