import { Link } from "react-router-dom";

import { UserInput } from "../../../components/user-input";
import { BackButton } from "../../../components/back-button";

interface RegisterStep1Props{
    FilledRegisterStep1: () => void,
}

export function RegisterStep1({
    FilledRegisterStep1,
}:RegisterStep1Props){
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
                                        subtitle="Insira seu nome completo"
                                        inputType="text"
                                    />

                                    <UserInput 
                                        title="Data de Nascimento" 
                                        subtitle="dd/mm/aaaa"
                                        inputType="text"
                                    />

                                    <UserInput 
                                        title="E-mail" 
                                        subtitle="Insira seu e-mail"
                                        inputType="e-mail"
                                    />

                                    <UserInput 
                                        title="CPF" 
                                        subtitle="Insira seu CPF"
                                        inputType="text"
                                    />

                                    <UserInput 
                                        title="Telefone" 
                                        subtitle="Insira seu telefone"
                                        inputType="text"
                                    />

                            </div>

                            <div className='flex justify-center'>
                                <button onClick={FilledRegisterStep1} className='bg-red-600 py-2 px-20 rounded-xl hover:bg-red-700'>
                                    <span className='text-zinc-50 font-bold text-lg'>Avançar</span>
                                </button>
                            </div>

                        </div>
                    </form>
    )
}