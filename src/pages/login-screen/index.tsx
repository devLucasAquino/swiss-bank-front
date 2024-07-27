import {  User, CircleHelp } from 'lucide-react'

export function LoginScreen(){
    return(
        <div className="h-screen flex justify-center flex-col bg-gradient-to-t from-red-700 to-red-800 gap-32">

            <div className='w-full flex justify-between mt-7 px-36'>
                <div className='flex space-x-4'>
                    <User className='size-16 text-zinc-50'/>
                    <div className='w-px h-16 bg-zinc-100'/>
                    <h3 className='text-zinc-50 font-bold text-3xl'>Swiss <br /> Wallet</h3>
                </div>

                <div>
                    <button>
                        <CircleHelp className='size-14 text-zinc-300'/>
                    </button>
                </div>
            </div>

            <div className='w-full flex justify-center items-center flex-1'>
                <div className='flex justify-center bg-white items-center p-9 rounded-2xl w-[640px]'>
                    <div className='flex flex-col space-y-10 w-full h-full'>
                        <div className='space-y-4'>
                            <h3 className='text-3xl font-bold font-sans'>Login</h3>
                            <p className='font-medium text-zinc-600'>Bem-vindo(a) ao portal SwissWallet.</p>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <h2 className='font-bold text-lg font-sans'>Usuário</h2>
                            <div className='flex flex-col'>
                                <input className='rounded-md border-2 border-zinc-400 p-3 w-auto'
                                    type="text"
                                    placeholder='Insira seu e-mail ou CPF'    
                                />
                                <button>
                                    <span className='text-zinc-500 font-sans font-medium'>
                                        não tenho conta
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <button className='bg-red-600 py-2 px-20 rounded-xl hover:bg-red-700'>
                                <span className='text-zinc-50 font-bold text-lg'>Avançar</span>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='flex w-full justify-center'>
                <p className='text-zinc-50 font-semibold'>© SwissWallet - 2024</p>
            </div>
            
        </div>
    )
}