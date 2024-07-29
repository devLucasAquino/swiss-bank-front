import { CircleHelp, User } from "lucide-react";

export function LoginAndRegisterHeader(){
    return(
        <div className="h-9 flex justify-center flex-col bg-transparent gap-24 ">
            <div className='w-full flex justify-between mt-11 px-28'>
                <div className='flex space-x-4'>
                    <User className='size-12 text-zinc-50'/>
                    <div className='w-px h-12 bg-zinc-100'/>
                    <h3 className='text-zinc-50 font-bold text-xl'>Swiss <br /> Wallet</h3>
                </div>

                <div>
                    <button>
                        <CircleHelp className='size-9 text-zinc-300'/>
                    </button>
                </div>
            </div>
        </div>
    )
}