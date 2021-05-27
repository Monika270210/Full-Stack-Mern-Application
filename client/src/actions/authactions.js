

export const SigninWithGoogle=(profile)=>async(dispatch)=>{
        //  console.log(profile);
        try {
            
            const SigninWithGoogleObj={
                type:'SIGN_IN_WITH_GOOGLE',
                payload:profile
            }
            dispatch(SigninWithGoogleObj);
        } catch (error) {
            console.log(error);
        }
}

export const LogOut=()=>async(dispatch)=>{
      
    try {
        const LogOutObj={
            type:'LOG_OUT',
        }
        dispatch(LogOutObj);
    } catch (error) {
        console.log(error);
    }
}