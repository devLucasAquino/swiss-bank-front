import { ArrowDownWideNarrow, Filter, Heart } from "lucide-react";
import { HomeHeader } from "../../components/home-header";

import camisa1 from "../../assets/images/prod1.png"
import camisa2 from "../../assets/images/prod2.png"
import { HomeFooter } from "../../components/home-footer";
import { ProductCardStore } from "../../components/product-card-store";

export function SwissStorePage(){
    return(
        <div className="bg-slate-200 bg-opacity-50 space-y-20 h-auto">

            <HomeHeader />

            <main className="mr-40 ml-40">

                <div className="flex items-center">
                    <div className="flex flex-1 flex-col space-y-6">
                        <h1 className="text-6xl font-medium">Loja</h1>
                        <h3 className="text-2xl text-zinc-600 ml-8">Confira nossas melhores opções disponíveis de camisetas</h3>
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
                        src={camisa1}
                        alt="texto"
                        title="camisa branca SENAI"
                        description="camisa padrão SENAI"
                        value={50}
                    />
                    <ProductCardStore 
                        src={camisa2}
                        alt="texto"
                        title="camisa preta SENAI"
                        description="camisa padrão SENAI"
                        value={50}
                    />
                    <ProductCardStore 
                        src={camisa2}
                        alt="texto"
                        title="camisa preta SENAI"
                        description="camisa padrão SENAI"
                        value={50}
                    />

                </div>


                <div className="flex w-full h-auto space-x-11 justify-center mt-20">

                    <ProductCardStore 
                        src={camisa1}
                        alt="texto"
                        title="camisa branca SENAI"
                        description="camisa padrão SENAI"
                        value={50}
                    />
                    <ProductCardStore 
                        src={camisa2}
                        alt="texto"
                        title="camisa preta SENAI"
                        description="camisa padrão SENAI"
                        value={50}
                    />
                    <ProductCardStore 
                        src={camisa1}
                        alt="texto"
                        title="camisa branca SENAI"
                        description="camisa padrão SENAI"
                        value={50}
                    />
                    
                </div>










            </main>

            <HomeFooter />


        </div>
    )
}