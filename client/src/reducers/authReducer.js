
const AuthReducer=(state={authUser:null},action)=>{
     switch (action.type) {
         case 'SIGN_IN_WITH_GOOGLE':
            window.localStorage.setItem('user',JSON.stringify(action.payload));
            return state;
            case 'LOG_OUT':
                window.localStorage.clear();
                return state;
         default:
            return state;
     }
};

export default AuthReducer;