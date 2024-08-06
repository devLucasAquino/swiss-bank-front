import { ChevronRight, Heart } from "lucide-react"
import { HomeHeader } from "../../components/home-header"

export function HomePage(){
    return(
        <div className="bg-slate-200 bg-opacity-50 space-y-20">
            <HomeHeader />

            <main className="mr-40 ml-40">
                <div className="flex items-center justify-between">


                    <div className="w-[620px] h-32 space-y-3 p-5 rounded-xl bg-white shadow-xl">
                        <div className="flex space-x-2 items-center">
                            <Heart className="size-7 font-bold "/>
                            <h2 className="text-2xl font-bold">AAPM</h2>
                        </div>
                        <p className="w-96 font-medium ml-10">
                            apoie na gestão da escola no alcance de suas metas e promoção a integração escola-comunidade.
                        </p>
                    </div>



                    <div className="w-[620px] h-32 space-y-3 p-5 rounded-xl bg-white shadow-xl">

                        <div className="flex space-x-2 items-center">
                            <Heart className="size-7 font-bold " />
                            <h2 className="text-2xl font-bold">Favoritos</h2>
                        </div>
                        <div className="flex justify-between">
                            <p className="w-96 font-medium ml-10">
                                acessar os favoritos
                            </p>
                            <button>
                                <ChevronRight />
                            </button>
                        </div>

                    </div>


                </div>



                <div className="flex justify-center w-auto p-5 rounded-xl bg-white shadow-xl mt-20">
                    <div className="w-full flex justify-start">
                        <h1 className="text-3xl font-bold">Destaques - Loja</h1>
                    </div>
                </div>





















            </main>

        </div>
    )
}