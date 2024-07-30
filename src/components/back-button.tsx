import { ChevronLeft } from "lucide-react";


export function BackButton({ ...props }){
    return(
        <button {...props} className='size-12 bg-red-700 rounded-full justify-start'>
            <div className='flex justify-center'>
                <ChevronLeft className='size-8 text-zinc-50'/>
            </div>
        </button>
    )
}