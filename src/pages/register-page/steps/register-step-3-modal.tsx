import { UserInput } from "../../../components/user-input";
import { BackButton } from "../../../components/back-button";
import { PrimaryButton } from "../../../components/primary-button";
import { useState } from "react";

interface RegisterStep3Props{
    CompletedRegister: () => void,
    BackRegisterStep2: () => void,
    setPassword: (password: string) => void,
    handleSignOut: (e: React.FormEvent) => void,
}

export function RegisterStep3({
    CompletedRegister,
    BackRegisterStep2,
    setPassword,
    handleSignOut,
}:RegisterStep3Props){

    const [ passwordLocal, setPasswordLocal ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const [ egualsPassword, setEgualsPassword ] = useState<boolean | undefined>(undefined);

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordLocal(event.target.value);
    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    const handleBlur = () => {
        if(passwordLocal !== '' && confirmPassword !== ''){
            setEgualsPassword(passwordLocal === confirmPassword)

            if(passwordLocal === confirmPassword){
                setPassword(passwordLocal)
            }
        }
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        handleSignOut(event);
        CompletedRegister(); // Chama a função passada como prop
    };

    return(  
        <form onSubmit={handleSubmit} className='w-full flex justify-center items-center'>
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
                                    onChange={handlePasswordChange}
                                />

                                <UserInput 
                                    title="Confirme sua senha"
                                    subtitle="Confirme sua senha"
                                    type="password"
                                    onChange={handleConfirmPasswordChange}
                                    onBlur={handleBlur}
                                />

                                <div className="flex justify-center items-center">
                                    {egualsPassword !== undefined &&
                                        !egualsPassword? (
                                            <span className='text-red-700 font-sans font-medium'>
                                                *a senha esta incorreta
                                            </span> 
                                        ) : (
                                            <span className='text-transparent font-sans font-medium'>
                                                a senha foi aprovada
                                            </span> 
                                        )
                                    }
                                </div>
                                


                        </div>

                        <PrimaryButton type="submit">Cadastrar</PrimaryButton>

                    </div>
        </form>
    )
}