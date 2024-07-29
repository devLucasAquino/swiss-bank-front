import { useState } from "react";

import { CircleHelp, User } from "lucide-react";

import { RegisterStep1 } from "./steps/register-step1-modal";
import { RegisterStep2 } from "./steps/register-step-2-modal";
import { RegisterStep3 } from "./steps/register-step-3-modal";
import { CompleteRegister } from "./steps/complete-register-moda";



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

            <div className='w-full flex justify-between mt-11 px-28'>
                <div className='flex space-x-4'>
                    <User className='size-14 text-zinc-50'/>
                    <div className='w-px h-14 bg-zinc-100'/>
                    <h3 className='text-zinc-50 font-bold text-2xl'>Swiss <br /> Wallet</h3>
                </div>

                <div>
                    <button>
                        <CircleHelp className='size-10 text-zinc-300'/>
                    </button>
                </div>
            </div>



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