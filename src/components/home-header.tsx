import { ChevronRight, Eye, Settings } from "lucide-react"
import logo from "../assets/images/logotipo.png"

export function HomeHeader(){
    return(
        <header className="">
            <div className="flex p-6 justify-between bg-gradient-to-t from-red-900 to-red-600">
                <img className="h-28" src={logo} alt="logotipo SwissWallet" />
                <div className="flex items-center p-10">
                    <nav className="flex space-x-7">
                        <p className="text-zinc-100 text-2xl font-bold">Swiss Store</p>
                        <p className="text-zinc-100 text-2xl font-bold">Biblioteca</p>
                        <p className="text-zinc-100 text-2xl font-bold">Cantina</p>
                        <Settings className="text-zinc-100 size-8" />
                    </nav>
                </div>
            </div>

            <div className="flex justify-center -mt-10">
                <div className="flex justify-between w-[600] p-5 space-x-60 rounded-xl bg-white shadow-xl">

                    <div>
                        <h2 className="font-medium text-lg">Saldo</h2>
                        <p className="font-bold text-2xl">Pontos *****</p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center">
                            <button>
                                <div className="flex items-center">
                                    <span className="font-medium">ver extrato</span>
                                    <ChevronRight />
                                </div>
                            </button>
                        </div>
                        <div className="flex justify-end">
                            <Eye />
                        </div>
                    </div>

                </div>
            </div>


        </header>
    )
}