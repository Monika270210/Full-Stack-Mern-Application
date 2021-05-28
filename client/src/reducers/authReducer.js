
const addusertolocalstorage = (data) => {
    window.localStorage.setItem('user', JSON.stringify(data));
}

const AuthReducer = (state = { authUser: null }, action) => {
    switch (action.type) {
        case 'SIGN_IN_WITH_GOOGLE':
            addusertolocalstorage(action.payload);
            return state;
        case 'SIGN_IN':
            addusertolocalstorage(action.payload);
            return state;
        case 'SIGN_UP':
            addusertolocalstorage(action.payload);
            return state;
        case 'LOG_OUT':
            window.localStorage.clear();
            return state;
        default:
            return state;
    }
};

export default AuthReducer;