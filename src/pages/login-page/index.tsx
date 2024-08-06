import { UserLogin } from './user-login-modal'
import { useState } from 'react';
import { LoginAndRegisterHeader } from '../../components/login-and-register-header';
import { PasswordLogin } from './password-login-modal';
import { LoginAndRegisterFooter } from '../../components/login-and-register-footer';

export function LoginPage(){

    const [ userLogin, setUserLogin ] = useState(true);
    const [ passwordLogin, setPasswordLogin ] = useState(false);

    function OpenPasswordLogin(){
        setUserLogin(false);
        setPasswordLogin(true);
    }


    return(
        <div className="h-screen flex justify-center flex-col bg-gradient-to-t from-red-700 to-red-800 gap-24 bg-no-repeat bg-center">

            <LoginAndRegisterHeader />

            {userLogin && (
                <UserLogin 
                    OpenPasswordLogin={OpenPasswordLogin}
                />
            )}

            {passwordLogin && (
                <PasswordLogin />
            )}

            <LoginAndRegisterFooter />
            
        </div>
    )
}