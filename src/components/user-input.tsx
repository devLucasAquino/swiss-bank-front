import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants"

const userInputVariants = tv({
    base: 'rounded-md border-2 border-zinc-400 p-3 w-auto focus:outline-red-600 focus:border-white',

    // variants: {
    //     size: {
    //         default: 'w-auto',
    //         flexOne: 'flex-1'
    //     },
    // },

    // defaultVariants: {
    //     size: 'default',
    // }
});

const userTitleVatiants = tv({
    base: 'font-bold text-lg font-sans'
})

interface UserInputProps extends ComponentProps<'input'>, VariantProps<typeof userInputVariants>{
    title: string,
    subtitle: string,
}

export function UserInput({
    title,
    subtitle,
    ...props
}:UserInputProps){
    return(
        <div className='flex flex-col space-y-2'>
            <h2 className={userTitleVatiants()}>{title}</h2>
            <input {...props} className={userInputVariants()}
                placeholder={subtitle}   
            />
        </div>
    )
}