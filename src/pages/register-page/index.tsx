import { useState } from "react";

import { RegisterStep1 } from "./steps/register-step1-modal";
import { RegisterStep2 } from "./steps/register-step-2-modal";
import { RegisterStep3 } from "./steps/register-step-3-modal";
import { CompleteRegister } from "./steps/complete-register-moda";
import { LoginAndRegisterHeader } from "../../components/login-and-register-header";
import { LoginAndRegisterFooter } from "../../components/login-and-register-footer";



export function RegisterPage(){


    // Estados para gerenciar passos de cadastro
    const [ registerStep1, setRegisterStep1 ] = useState(true);
    const [ filledRegisterStep1, setFilledRegisterStep1 ] = useState(false);
    const [ filledRegisterStep2, setFilledRegisterStep2 ] = useState(false);
    const [ completedRegister, setCompletedRegister ] = useState(false);


    // Estados para armazenar dados do cadastro step 1
    const [ name, setName ] = useState('');
    const [ dateBorn, setDateBorn ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ phone, setPhone ] = useState('');

    // Estados para armazenar dados do cadastro step 2
    const [ cep, setCep ] = useState('');
    const [ city, setCity ] = useState('');
    const [ uf, setUf ] = useState('');
    const [ logradouro, setLogradouro ] = useState('');

    // Estados para armazenar dados do cadastro step 3
    const [ password, setPassword ] = useState('');


    // Funções para avançar entre os estados de registro
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

    // Funções para retornar entre os estados de registro
    function BackRegisterStep1(){
        setFilledRegisterStep1(false);
        setRegisterStep1(true);
    }

    function BackRegisterStep2(){
        setFilledRegisterStep2(false);
        setFilledRegisterStep1(true);
    }



    return(
        <div className="h-auto flex justify-center flex-col bg-gradient-to-t from-red-700 to-red-800 gap-24">

            <LoginAndRegisterHeader />

            {registerStep1 && (
                <RegisterStep1 
                    FilledRegisterStep1={FilledRegisterStep1} 
                />
            )}

            {filledRegisterStep1 && (
                <RegisterStep2
                    FilledRegisterStep2={FilledRegisterStep2}
                    BackRegisterStep1={BackRegisterStep1}
                />
            )}

            {filledRegisterStep2 && (
                <RegisterStep3 
                    CompletedRegister={CompletedRegister}
                    BackRegisterStep2={BackRegisterStep2}
                />
            )}

            {completedRegister && (
                <CompleteRegister />
            )}

            <LoginAndRegisterFooter />

        </div>
    )
}