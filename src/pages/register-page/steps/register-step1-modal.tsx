import { useState } from "react";
import { Link } from "react-router-dom";
import { parseISO } from 'date-fns';

import { UserInput } from "../../../components/user-input";
import { BackButton } from "../../../components/back-button";
import { PrimaryButton } from "../../../components/primary-button";

interface RegisterStep1Props{
    FilledRegisterStep1: () => void,
    setName: (name: string) => void,
    setDateBorn: (dateBorn: Date) => void;
    setEmail: (email: string) => void;
    setCpf: (cpf: string) => void;
    setPhone: (phone: string) => void;
}

export function RegisterStep1({
    FilledRegisterStep1,
    setName,
    setDateBorn,
    setEmail,
    setCpf,
    setPhone
}:RegisterStep1Props){

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        setName(name);
    }

    const [inputValueDateBorn, setInputValueDateBorn] = useState('');

    const handleDateBornChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const dateBornString = event.target.value;
        setInputValueDateBorn(dateBornString);

        const dateBorn = parseISO(dateBornString);
        setDateBorn(dateBorn)
        
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value;
        setEmail(email);
    }

    const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const cpf = event.target.value;
        setCpf(cpf);
    }

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const phone = event.target.value.trim();
        setPhone(phone);
    }




    return(
                    <form className='w-full flex justify-center items-center'>
                        <div className='flex flex-col space-y-10 bg-white rounded-2xl w-[640px] px-9 py-14'>

                            <div className="space-y-6">
                                <Link to={`/`}>
                                    <BackButton/>
                                </Link>
                                <div>
                                    <h3 className='text-3xl font-bold font-sans'>Cadastre-se</h3>
                                    <p className='font-medium text-zinc-600'>Todos os campos são obrigatórios.</p>
                                </div>
                            </div>

                            <div className='space-y-3'>
                                
                                    <UserInput 
                                        title="Nome Completo" 
                                        subtitle='Insira seu nome'
                                        type="text"
                                        onChange={handleNameChange}
                                    />

                                    <UserInput 
                                        title="Data de Nascimento" 
                                        subtitle="dd/mm/aaaa"
                                        type="date"
                                        onChange={handleDateBornChange}
                                        value={inputValueDateBorn}
                                    />

                                    <UserInput 
                                        title="E-mail" 
                                        subtitle="Insira seu e-mail"
                                        type="email"
                                        onChange={handleEmailChange}
                                    />

                                    <UserInput 
                                        title="CPF" 
                                        subtitle="Insira seu CPF"
                                        type="text"
                                        onChange={handleCpfChange}
                                    />

                                    <UserInput 
                                        title="Telefone" 
                                        subtitle="Insira seu telefone"
                                        type="text"
                                        onChange={handlePhoneChange}
                                    />

                            </div>

                            <PrimaryButton onClick={FilledRegisterStep1}>Avançar</PrimaryButton>

                        </div>
                    </form>
    )
}