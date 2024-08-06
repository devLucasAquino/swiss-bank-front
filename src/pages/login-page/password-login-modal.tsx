import { Link } from "react-router-dom";
import { BackButton } from "../../components/back-button";
import { PrimaryButton } from "../../components/primary-button";

export function PasswordLogin(){
    return(
        <div className='w-full flex justify-center items-center flex-1'>
                    <div className='flex justify-center bg-white items-center p-9 rounded-2xl w-[640px]'>
                       <div className='flex flex-col space-y-9 w-full h-full'>
                        <Link to={`/`}>
                            <BackButton />
                        </Link>
                         <div className='space-y-1'>
                                <h3 className='text-2xl font-bold font-sans'>Digite sua senha</h3>
                                <p className='font-medium text-zinc-600'>nomeusuario</p>
                         </div>
 
                         <form className='flex gap-10 flex-col'>
                             <div className='flex flex-col space-y-4'>
                                 <div className='flex flex-col'>
                                     <input className='rounded-md border-2 border-zinc-400 p-3 w-auto focus:outline-red-600 focus:border-white'
                                         type="password"
                                         placeholder='Digite sua senha'
                                     />
                                     <button>
                                        <span className='text-zinc-500 font-sans font-medium'>
                                            esqueceu a senha?
                                        </span>                                  
                                     </button>
                                 </div>
                             </div>
                            
                            <Link to={`/home`}>
                                <PrimaryButton>Avançar</PrimaryButton>
                            </Link>
                            
                         </form>
 
                         
                     </div>
                 </div>
             </div>
    )
}