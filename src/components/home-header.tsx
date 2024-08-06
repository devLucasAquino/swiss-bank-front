import { Settings } from "lucide-react"
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
                        <h2>Saldo</h2>
                        <p>Pontos *****</p>
                    </div>

                    <div>
                        <button>
                            ver extrato 
                        </button>
                    </div>

                </div>
            </div>


        </header>
    )
}