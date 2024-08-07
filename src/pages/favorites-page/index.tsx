import { ArrowDownWideNarrow, Filter } from "lucide-react";
import { HomeHeader } from "../../components/home-header";
import { ProductCardStore } from "../../components/product-card-store";

import prod1 from "../../assets/images/prod1.png"
import prod2 from "../../assets/images/prod2.png"
import prod3 from "../../assets/images/prod3.png"
import prod4 from "../../assets/images/prod4.png"

export function FavoritesPage(){
    return(
        <div className="bg-slate-200 bg-opacity-50 space-y-20 h-auto">

            <HomeHeader />

            <main className="mr-40 ml-40">
                <div className="flex items-center">
                    <div className="flex flex-1 flex-col space-y-6">
                        <h1 className="text-6xl font-medium">Favoritos</h1>
                        <h3 className="text-2xl text-zinc-600 ml-8">Confira sua lista de favoritos</h3>
                    </div>
                    <div className="flex justify-between h-full w-52">
                        <button>
                            <div className="flex">
                                <Filter />
                                <p>Filtrar</p>
                            </div>
                        </button>
                        <button>
                            <div className="flex">
                                <ArrowDownWideNarrow />
                                <p>Ordenar</p>
                            </div>
                        </button>
                    </div>
                </div>


                <div className="flex w-full h-auto space-x-11 justify-center mt-20">


                    <ProductCardStore 
                        src={prod4}
                        alt="camiseta"
                        description="camiseta preta senai"
                        title="Coca cola "
                        value={40}
                    />
                    <ProductCardStore 
                        src={prod2}
                        alt="camiseta"
                        description="camiseta preta senai"
                        title="Camiseta preta"
                        value={40}
                    />
                    <ProductCardStore 
                        src={prod3}
                        alt="camiseta"
                        description="Livro"
                        title="Livro"
                        value={40}
                    />

                </div>
                <div className="flex w-full h-auto space-x-11 justify-center mt-20">


                    <ProductCardStore 
                        src={prod1}
                        alt="camiseta"
                        description="camiseta branca senai"
                        title="Camiseta Branca"
                        value={40}
                    />
                    <ProductCardStore 
                        src={prod4}
                        alt="camiseta"
                        description="camiseta preta senai"
                        title="Coca cola "
                        value={40}
                    />
                    

                </div>



            </main>

        </div>
    )
}