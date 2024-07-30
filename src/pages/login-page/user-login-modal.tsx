import { Link } from "react-router-dom";
import { PrimaryButton } from "../../components/primary-button";

interface UserLoginProps{
    OpenPasswordLogin: () => void,
}

export function UserLogin({
    OpenPasswordLogin,
}:UserLoginProps){
    return(
        <div className='w-full flex justify-center items-center flex-1'>
                <div className='flex justify-center bg-white items-center p-9 rounded-2xl w-[640px]'>
                    <div className='flex flex-col space-y-10 w-full h-full'>
                        <div className='space-y-4'>
                            <h3 className='text-3xl font-bold font-sans'>Login</h3>
                            <p className='font-medium text-zinc-600'>Bem-vindo(a) ao portal SwissWallet.</p>
                        </div>

                        <form className='flex gap-10 flex-col'>
                            <div className='flex flex-col space-y-4'>
                                <h2 className='font-bold text-lg font-sans'>Usuário</h2>
                                <div className='flex flex-col'>
                                    <input className='rounded-md border-2 border-zinc-400 p-3 w-auto focus:outline-red-600 focus:border-white'
                                        type="text"
                                        placeholder='Insira seu e-mail ou CPF'    
                                    />
                                    <button>
                                        <Link to={'/register'} >
                                            <span className='text-zinc-500 font-sans font-medium'>
                                                não tenho conta
                                            </span>
                                        </Link>                                       
                                    </button>
                                </div>
                            </div>

                            <PrimaryButton onClick={OpenPasswordLogin}>Avançar</PrimaryButton>
                        </form>

                        
                    </div>
                </div>
            </div>
    )
}