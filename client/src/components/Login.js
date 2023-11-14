import React, { useState } from "react";

import LoginForm from "./LoginForm";
import SignupForm from "./SignUpForm";

function Login({ onLogin }){

    const [signupMode, setSignupMode] = useState(false)


    return (
        signupMode? 
            <SignupForm signupMode={signupMode} setSignupMode={setSignupMode} onLogin={onLogin} /> : 
            <LoginForm 
                onLogin={onLogin} 
                setSignupMode={setSignupMode} 
                signupMode={signupMode} 
            />
    )
}

  

export default Login