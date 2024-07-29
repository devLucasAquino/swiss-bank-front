import { useState } from "react";

import { RegisterStep1 } from "./steps/register-step1-modal";
import { RegisterStep2 } from "./steps/register-step-2-modal";
import { RegisterStep3 } from "./steps/register-step-3-modal";
import { CompleteRegister } from "./steps/complete-register-moda";
import { LoginAndRegisterHeader } from "../../components/login-and-register-header";



export function RegisterPage(){


    // Estados para gerenciar passos de cadastro
    const [ registerStep1, setRegisterStep1 ] = useState(true);
    const [ filledRegisterStep1, setFilledRegisterStep1 ] = useState(false);
    const [ filledRegisterStep2, setFilledRegisterStep2 ] = useState(false);
    const [ completedRegister, setCompletedRegister ] = useState(false);

    // Funções para gerenciar os estados
    function FilledRegisterStep1(){
        setRegisterStep1(false);
        setFilledRegisterStep1(true);
    }

    function FilledRegisterStep2(){
        setFilledRegisterStep1(false);
        setFilledRegisterStep2(true);
    }

    function CompletedRegister(){
        setFilledRegisterStep2(false);
        setCompletedRegister(true);
    }



    return(
        <div className="h-auto flex justify-center flex-col bg-gradient-to-t from-red-700 to-red-800 gap-24 bg-no-repeat bg-center">

            <LoginAndRegisterHeader />



            {registerStep1 && (
                <RegisterStep1 FilledRegisterStep1={FilledRegisterStep1} />
            )}

            {filledRegisterStep1 && (
                <RegisterStep2
                    FilledRegisterStep2={FilledRegisterStep2}
                />
            )}

            {filledRegisterStep2 && (
                <RegisterStep3 CompletedRegister={CompletedRegister} />
            )}

            {completedRegister && (
                <CompleteRegister />
            )}



            <div className='flex w-full justify-center'>
                <p className='text-zinc-50 font-semibold'>© SwissWallet - 2024</p>
            </div>
        </div>
    )
}