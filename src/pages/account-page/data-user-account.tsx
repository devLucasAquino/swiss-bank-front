interface DataUserAccountProps{
    title: string,
    description: string,
}

export function DataUserAccount({
    title,
    description,
}:DataUserAccountProps){
    return(
        <>
            <div className="w-full flex items-center py-4 px-7">
                <div className="w-20">
                    <span className="font-medium text-2xl text-nowrap">{title}:</span>
                </div>
                <div className="flex-1 flex justify-center">
                    <span className="font-semibold text-3xl">{description}</span>
                </div>
            </div>
            <div className="w-full bg-slate-400 h-[1px]"/>
        </>
    )
}