import { UserInput } from "../../../components/user-input";
import { BackButton } from "../../../components/back-button";
import { PrimaryButton } from "../../../components/primary-button";
import { useState } from "react";

interface RegisterStep3Props{
    CompletedRegister: () => void,
    BackRegisterStep2: () => void,
}

export function RegisterStep3({
    CompletedRegister,
    BackRegisterStep2,
}:RegisterStep3Props){

    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');


    return(  
        <form className='w-full flex justify-center items-center'>
                    <div className='flex flex-col space-y-10 bg-white rounded-2xl w-[640px] px-9 py-14'>

                        <div className="space-y-6"> 
                            <BackButton onClick={BackRegisterStep2} />
                            <div>
                                <h3 className='text-3xl font-bold font-sans'>Cadastre-se</h3>
                                <p className='font-medium text-zinc-600'>Todos os campos são obrigatórios.</p>
                            </div>
                        </div>

                        <div className='space-y-3'>
                            
                                <UserInput 
                                    title="Crie sua senha"
                                    subtitle="Crie sua senha"
                                    type="password"
                                    onChange={(event) => setPassword(event.target.value)}
                                />

                                <UserInput 
                                    title="Confirme sua senha"
                                    subtitle="Confirme sua senha"
                                    type="password"
                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                />
                                { password !== confirmPassword ? (
                                    <div>
                                        <h2>as senhas estão diferentes</h2>
                                    </div>
                                ) : (
                                    <div>
                                        <h2>aprovado</h2>
                                    </div>
                                ) }


                        </div>

                        <PrimaryButton onClick={CompletedRegister} >Cadastrar</PrimaryButton>

                    </div>
        </form>
    )
}