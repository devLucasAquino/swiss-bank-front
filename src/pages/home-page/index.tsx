import { ChevronRight, Heart } from "lucide-react"
import { HomeHeader } from "../../components/home-header"

export function HomePage(){
    return(
        <div className="bg-slate-200 bg-opacity-50">
            <HomeHeader />

            <main className="mr-24 ml-24 mt-20">
                <div className="flex items-center justify-center space-x-36">


                    <div className="w-auto h-32 space-y-3 p-5 rounded-xl bg-white shadow-xl">
                        <div className="flex space-x-2 items-center">
                            <Heart className="size-7 font-bold "/>
                            <h2 className="text-2xl font-bold">AAPM</h2>
                        </div>
                        <p className="w-96 font-medium">
                            apoie na gestão da escola no alcance de suas metas e promoção a integração escola-comunidade.
                        </p>
                    </div>



                    <div className="w-auto h-32 space-y-3 p-5 rounded-xl bg-white shadow-xl">

                        <div className="flex space-x-2 items-center">
                            <Heart className="size-7 font-bold " />
                            <h2 className="text-2xl font-bold">Favoritos</h2>
                        </div>
                        <div className="flex justify-between">
                            <p className="w-96 font-medium">
                                acessar os favoritos
                            </p>
                            <button>
                                <ChevronRight />
                            </button>
                        </div>

                    </div>


                </div>
            </main>

        </div>
    )
}