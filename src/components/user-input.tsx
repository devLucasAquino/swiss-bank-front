import { tv } from "tailwind-variants"

const userInputVariants = tv({
    base: 'rounded-md border-2 border-zinc-400 p-3 w-auto focus:outline-red-600 focus:border-white',
});

const userTitleVatiants = tv({
    base: 'font-bold text-lg font-sans'
})

interface UserInputProps{
    title: string,
    subtitle: string,
    inputType: string,
}


export function UserInput({
    title,
    subtitle,
    inputType,
}:UserInputProps){
    return(
        <div className='flex flex-col space-y-2'>
            <h2 className={userTitleVatiants()}>{title}</h2>
            <input className={userInputVariants()}
                placeholder={subtitle}
                type={inputType}    
            />
        </div>
    )
}