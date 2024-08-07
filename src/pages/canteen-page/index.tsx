import { ArrowDownWideNarrow, Filter } from "lucide-react";
import { HomeHeader } from "../../components/home-header";
import { ProductCardStore } from "../../components/product-card-store";

import produto from "../../assets/images/prod4.png"
import { HomeFooter } from "../../components/home-footer";

export function CanteenPage(){
    return(
        <div className="bg-slate-200 bg-opacity-50 space-y-20 h-auto">

            <HomeHeader />
        
            <main className="mr-40 ml-40">

                <div className="flex items-center">
                    <div className="flex flex-1 flex-col space-y-6">
                        <h1 className="text-6xl font-medium">Cantina</h1>
                        <h3 className="text-2xl text-zinc-600 ml-8">Confira os lanches e os combos disponíveis</h3>
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
                        src={produto}
                        alt="produto"
                        description="Coca cola lata  350ml"
                        title="Coca Cola"
                        value={10}
                    />
                    <ProductCardStore 
                        src={produto}
                        alt="produto"
                        description="Coca cola lata  350ml"
                        title="Coca Cola"
                        value={10}
                    />
                    <ProductCardStore 
                        src={produto}
                        alt="produto"
                        description="Coca cola lata  350ml"
                        title="Coca Cola"
                        value={10}
                    />

                </div>
                <div className="flex w-full h-auto space-x-11 justify-center mt-20">

                    <ProductCardStore 
                        src={produto}
                        alt="produto"
                        description="Coca cola lata  350ml"
                        title="Coca Cola"
                        value={10}
                    />
                    <ProductCardStore 
                        src={produto}
                        alt="produto"
                        description="Coca cola lata  350ml"
                        title="Coca Cola"
                        value={10}
                    />
                    <ProductCardStore 
                        src={produto}
                        alt="produto"
                        description="Coca cola lata  350ml"
                        title="Coca Cola"
                        value={10}
                    />

                </div>

            </main>


            <HomeFooter />

        </div>
    )
}