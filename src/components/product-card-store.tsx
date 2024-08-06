import { Heart } from "lucide-react"

interface ProductCardStoreProps{
    src: string,
    alt: string,
    title: string,
    description: string,
    value: number
}

export function ProductCardStore({
    src,
    alt,
    title,
    description,
    value
}:ProductCardStoreProps){
    return(
        <div className="bg-white rounded-xl p-5 shadow-lg flex justify-center">
            <div>
                <img src={src} alt={alt} />
            </div>
            <div className="bg-black w-72 h-auto absolute rounded-xl p-3 space-y-3 mt-64">
                <div>
                    <h2 className="text-white text-2xl">{title}</h2>
                    <p className="text-zinc-500 ">{description}</p>
                </div>
                <div className="flex justify-center items-end gap-32">
                    <p className="text-white font-semibold"><span className="text-5xl" >{value}</span>pontos</p>
                    <button className="bg-red-600 py-2 rounded-3xl hover:bg-red-700 w-11 h-auto flex items-center justify-center">
                        <span className="text-zinc-50 font-bold text-xs"><Heart /></span>
                    </button>
                </div>
            </div>
        </div>
    )
}