
import {  User, CircleHelp, ChevronLeft } from 'lucide-react'
import { UserLogin } from './user-login-modal'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function LoginPage(){

    const [ userLogin, setUserLogin ] = useState(true);
    const [ passwordLogin, setPasswordLogin ] = useState(false);

    function OpenPasswordLogin(){
        setUserLogin(false);
        setPasswordLogin(true);
    }


    return(
        <div className="h-screen flex justify-center flex-col bg-gradient-to-t from-red-700 to-red-800 gap-24 bg-no-repeat bg-center">

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


            {userLogin && (
                <UserLogin OpenPasswordLogin={OpenPasswordLogin}/>
            )}

            {passwordLogin && (
                 <div className='w-full flex justify-center items-center flex-1'>
                    <div className='flex justify-center bg-white items-center p-9 rounded-2xl w-[640px]'>
                       <div className='flex flex-col space-y-9 w-full h-full'>
                       <button className='size-12 bg-red-700 rounded-full justify-start'>
                                    <div className='flex justify-center'>
                                        <ChevronLeft className='size-8 text-zinc-50'/>
                                    </div>
                        </button>
                         <div className='space-y-1'>
                                <h3 className='text-2xl font-bold font-sans'>Digite sua senha</h3>
                                <p className='font-medium text-zinc-600'>nomeusuario</p>
                         </div>
 
                         <form className='flex gap-10 flex-col'>
                             <div className='flex flex-col space-y-4'>
                                 <div className='flex flex-col'>
                                     <input className='rounded-md border-2 border-zinc-400 p-3 w-auto focus:outline-red-600 focus:border-white'
                                         type="text"
                                         placeholder='Digite sua senha'    
                                     />
                                     <button>
                                        <span className='text-zinc-500 font-sans font-medium'>
                                            esqueceu a senha?
                                        </span>                                  
                                     </button>
                                 </div>
                             </div>
 
                             <div className='flex justify-center'>
                                <Link to={`/home`}>
                                    <button className='bg-red-600 py-2 px-20 rounded-xl hover:bg-red-700'>
                                        <span className='text-zinc-50 font-bold text-lg'>Avançar</span>
                                    </button>
                                </Link>
                             </div>
                         </form>
 
                         
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