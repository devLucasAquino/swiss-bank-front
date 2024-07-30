import { ComponentProps, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants"

const primaryButtonVariants = tv({
    base: 'bg-red-600 py-2 px-20 rounded-xl hover:bg-red-700',

});

interface PrimaryButtonProps extends ComponentProps<'button'>, VariantProps<typeof primaryButtonVariants>{
    children: ReactNode;
}



export function PrimaryButton({
    children,
    ...props
}:PrimaryButtonProps){
    return(
        <div className='flex justify-center'>
            <button {...props} className={primaryButtonVariants()}>
                <span className='text-zinc-50 font-bold text-lg'>{children}</span>
            </button>
        </div>
    )
}