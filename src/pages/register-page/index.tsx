import { CircleHelp, User } from "lucide-react";

import { RegisterStep1 } from "../login-page/register-step1-modal";

export function RegisterPage(){
    return(
        <div className="h-auto flex justify-center flex-col bg-gradient-to-t from-red-700 to-red-800 gap-24 bg-no-repeat bg-center">

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

            
            <RegisterStep1 />




            <div className='flex w-full justify-center'>
                <p className='text-zinc-50 font-semibold'>© SwissWallet - 2024</p>
            </div>
        </div>
    )
}