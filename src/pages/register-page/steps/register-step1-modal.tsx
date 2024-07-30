import { Link } from "react-router-dom";

import { UserInput } from "../../../components/user-input";
import { BackButton } from "../../../components/back-button";
import { PrimaryButton } from "../../../components/primary-button";

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
                                        type="text"
                                    />

                                    <UserInput 
                                        title="Data de Nascimento" 
                                        subtitle="dd/mm/aaaa"
                                        type="date"
                                    />

                                    <UserInput 
                                        title="E-mail" 
                                        subtitle="Insira seu e-mail"
                                        type="email"
                                    />

                                    <UserInput 
                                        title="CPF" 
                                        subtitle="Insira seu CPF"
                                        type="text"
                                    />

                                    <UserInput 
                                        title="Telefone" 
                                        subtitle="Insira seu telefone"
                                        type="text"
                                    />

                            </div>

                            <PrimaryButton onClick={FilledRegisterStep1}>Avançar</PrimaryButton>

                        </div>
                    </form>
    )
}