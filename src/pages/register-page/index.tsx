import { useState } from "react";

import { CircleHelp, User } from "lucide-react";

import { RegisterStep1 } from "./register-step1-modal";
import { RegisterStep2 } from "./register-step-2-modal";
import { RegisterStep3 } from "./register-step-3-modal";
import { Link } from "react-router-dom";



export function RegisterPage(){

    const [ registerStep1, setRegisterStep1 ] = useState(true);


    const [ filledRegisterStep1, setFilledRegisterStep1 ] = useState(false);


    const [ filledRegisterStep2, setFilledRegisterStep2 ] = useState(false);

    const [ completedRegister, setCompletedRegister ] = useState(false);


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
                <div className="flex flex-1 justify-center h-auto w-full">
                    <div className='flex justify-center flex-col space-y-16 bg-white rounded-3xl w-[640px] px-9 py-14'>
                        <h1 className="text-center text-3xl font-sans font-bold">Cadastro realizado com sucesso!</h1>
                        <p className="text-center text-xl font-sans font-semibold">Você ja está pronto para aproveitar nossos produtos e ofertas, <br>
                        </br> e esteja sempre preparado para novas promoções.</p>
                        <div className='flex justify-center'>
                            <Link to={`/`}>
                                <button className='bg-red-600 py-2 px-20 rounded-xl hover:bg-red-700'>
                                    <span className='text-zinc-50 font-bold text-lg'>Avançar</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            <div className='flex w-full justify-center'>
                <p className='text-zinc-50 font-semibold'>© SwissWallet - 2024</p>
            </div>
        </div>
    )
}