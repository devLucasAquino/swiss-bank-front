import { ChevronRight, Heart } from "lucide-react"
import { HomeHeader } from "../../components/home-header"

import produto1 from "../../assets/images/prod1.png"
import produto2 from "../../assets/images/prod2.png"
import produto3 from "../../assets/images/prod3.png"
import produto4 from "../../assets/images/prod4.png"
import { ProductCard } from "../../components/product-card"
import { HomeFooter } from "../../components/home-footer"
import { Link } from "react-router-dom"

export function HomePage(){
    return(
        <div className="bg-slate-200 bg-opacity-50 space-y-20 h-auto">
            <HomeHeader />

            <main className="mr-40 ml-40">
                <div className="flex items-center justify-between">


                    <div className="w-[550px] h-32 space-y-3 p-5 rounded-xl bg-white shadow-xl">
                        <div className="flex space-x-2 items-center">
                            <Heart className="size-7 font-bold "/>
                            <h2 className="text-2xl font-bold">AAPM</h2>
                        </div>
                        <p className="w-96 font-medium ml-10">
                            apoie na gestão da escola no alcance de suas metas e promoção a integração escola-comunidade.
                        </p>
                    </div>



                    <div className="w-[550px] h-32 space-y-3 p-5 rounded-xl bg-white shadow-xl">

                        <div className="flex space-x-2 items-center">
                            <Heart className="size-7 font-bold " />
                            <h2 className="text-2xl font-bold">Favoritos</h2>
                        </div>
                        <div className="flex justify-between">
                            <p className="w-96 font-medium ml-10">
                                acessar os favoritos
                            </p>
                            <Link to={'/favorites'}>
                                <button>
                                    <ChevronRight />
                                </button>
                            </Link>
                        </div>

                    </div>


                </div>



                <div className="flex flex-col justify-center w-full p-5 rounded-xl bg-white shadow-xl mt-20 px-10">

                    <div className="w-full h-auto flex justify-start">
                        <h1 className="text-3xl font-bold">Destaques - Loja</h1>
                    </div>

                    <div className="flex flex-row justify-center gap-11">
                        
                        <ProductCard 
                            src={produto1}
                            alt="alt"
                            description="description"
                            title="Produto 1"
                            value={40}
                        />
                        <ProductCard 
                            src={produto2}
                            alt="alt"
                            description="description"
                            title="Produto 1"
                            value={40}
                        />
                        <ProductCard 
                            src={produto1}
                            alt="alt"
                            description="description"
                            title="Produto 1"
                            value={40}
                        />

                    </div>

                </div>


                <div className="flex flex-col justify-center w-full p-5 rounded-xl bg-white shadow-xl mt-20 px-10">

                    <div className="w-full h-auto flex justify-start">
                        <h1 className="text-3xl font-bold">Destaques - Biblioteca</h1>
                    </div>

                    <div className="flex flex-row justify-center gap-11">

                        <ProductCard 
                            src={produto3}
                            alt="produto3"
                            title="Livro 1"
                            description="livro 1"
                            value={30}
                        />
                        <ProductCard 
                            src={produto3}
                            alt="produto3"
                            title="Livro 1"
                            description="livro 1"
                            value={20}
                        />
                        <ProductCard 
                            src={produto3}
                            alt="produto3"
                            title="Livro 1"
                            description="livro 1"
                            value={50}
                        />


                    </div>

                </div>


                <div className="flex flex-col justify-center w-full p-5 rounded-xl bg-white shadow-xl mt-20 px-10">

                    <div className="w-full h-auto flex justify-start">
                        <h1 className="text-3xl font-bold">Destaques - Cantina</h1>
                    </div>

                    <div className="flex flex-row justify-center gap-11">

                        <ProductCard 
                            src={produto4}
                            alt="Coca Cola"
                            title="Coca Cola"
                            description="Coca Cola"
                            value={10}
                        />
                        <ProductCard 
                            src={produto4}
                            alt="Coca Cola"
                            title="Coca Cola"
                            description="Coca Cola"
                            value={5}
                        />
                        <ProductCard 
                            src={produto4}
                            alt="Coca Cola"
                            title="Coca Cola"
                            description="Coca Cola"
                            value={15}
                        />

                    </div>

                </div>



            </main>

            <HomeFooter />

        </div>
    )
}