import { ChevronRight, Eye, EyeOff, Settings } from "lucide-react"
import logo from "../assets/images/logotipo.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import { DrawerMenu } from "./drawer-menu";

export function HomeHeader(){
    const [ openSettingsModal, setOpenSettingsModal ] = useState(false);
    const [ isVisiblePoints, setIsVisiblePoints ] = useState(false);

    function openSettings(){
        setOpenSettingsModal(true)
    }

    function closeSettings(){
        setOpenSettingsModal(false)
    }

    function visiblePoints(){
        setIsVisiblePoints(!isVisiblePoints)
    }

    return(
        <header className="">
            <div className="flex p-6 justify-between bg-gradient-to-t from-red-900 to-red-600">
                <Link to={"/home"}>
                    <img className="h-28" src={logo} alt="logotipo SwissWallet" />
                </Link>
                <div className="flex items-center p-10">
                    <nav className="flex space-x-7">
                        <Link to={'/swissstore'}>
                            <button>
                                <p className="text-zinc-100 hover:text-zinc-300 text-2xl font-bold">Swiss Store</p>
                            </button>
                        </Link>
                        <Link to={'/library'}>
                            <button>
                                <p className="text-zinc-100 hover:text-zinc-300 text-2xl font-bold">Biblioteca</p>
                            </button>
                        </Link>
                        <Link to={'/canteen'}>
                            <button>
                                <p className="text-zinc-100 hover:text-zinc-300 text-2xl font-bold">Cantina</p>
                            </button>
                        </Link>
                        <button onClick={openSettings}>
                            <Settings className="text-zinc-100 hover:text-zinc-300 size-8" />
                        </button>
                    </nav>
                </div>
            </div>

            <div className="flex justify-center -mt-10">
                <div className="flex justify-between w-[600] h-32 items-center p-5 space-x-32 rounded-xl bg-white shadow-xl">

                    <div>
                        <h2 className="font-medium text-lg">Saldo</h2>
                        <div className="flex m-w-[300px] gap-3">
                            <span className="font-bold text-2xl w-auto">
                                Pontos
                            </span>
                            <input className="font-bold text-2xl flex-1 bg-white" disabled value={123456} type={
                                isVisiblePoints ? 'text' : 'password'
                            }/>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center">
                            <Link to={'/extract'}>
                                <div className="flex items-center">
                                    <span className="font-medium">ver extrato</span>
                                    <ChevronRight />
                                </div>
                            </Link>
                        </div>
                        <button onClick={visiblePoints} >
                            <div className="flex justify-end">
                                {isVisiblePoints ? (
                                    <Eye />
                                ) : (
                                    <EyeOff />
                                )}
                            </div>
                        </button>
                    </div>

                </div>
            </div>

            {openSettingsModal && (
                <DrawerMenu 
                    isOpen={openSettingsModal}
                    closeSettings={closeSettings}
                />
            )}

        </header>
    )
}