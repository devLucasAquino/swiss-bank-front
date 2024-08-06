interface ProductCardProps{
    src: string,
    alt: string,
    title: string,
    description: string,
    value: number,
}

export function ProductCard({
    src,
    alt,
    title,
    description,
    value
}:ProductCardProps){
    return(
        <div className="p-9">

            <div className="flex justify-center items-end">
                <img src={src} className="size-96" alt={alt}/>

                <div className="bg-black w-72 h-auto absolute rounded-xl p-3 space-y-3">
                    <div>
                        <h2 className="text-white text-2xl ">{title}</h2>
                        <p className="text-zinc-500 ">{description}</p>
                    </div>
                    <div className="flex justify-center items-end gap-32">
                        <p className="text-white font-semibold"><span className="text-5xl" >{value}</span>pontos</p>
                        <button className="bg-red-600 py-2 rounded-xl hover:bg-red-700 w-full h-5 flex items-center justify-center">
                            <span className="text-zinc-50 font-bold text-xs">Salvar</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}