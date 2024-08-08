import { SquarePen } from "lucide-react";
import { HomeFooter } from "../../components/home-footer";
import { HomeHeader } from "../../components/home-header";
import { DataUserAccount } from "./data-user-account";
import { useState } from "react";
import { ChangePasswordModal } from "./change-password-modal";

export function AccountPage(){
    const [ isOpenChangePasswordModal, setIsOpenChangePasswordModal ] = useState(false);

    function OpenChangePasswordModal(){
        setIsOpenChangePasswordModal(true)
    }
    function CloseChangePasswordModal(){
        setIsOpenChangePasswordModal(false)
    }

    return(
        <div className="bg-slate-200 bg-opacity-50 space-y-20 h-auto">
            
            <HomeHeader />

            <main className="mr-40 ml-40 space-y-14">
                {isOpenChangePasswordModal && (
                    <ChangePasswordModal 
                        CloseChangePasswordModal={CloseChangePasswordModal}
                    />
                )}


                <div className="flex items-center">
                    <div className="flex flex-1 flex-col space-y-6">
                        <h1 className="text-6xl font-medium">Dados pessoais</h1>
                        <h3 className="text-2xl text-zinc-600 ml-8">Informações do usuário</h3>
                    </div>
                </div>
                
                <div className="w-full bg-white rounded-xl p-5 shadow-lg flex flex-col justify-center">
                    <div className="w-full flex justify-end">
                        <button>
                            <div className="w-10 h-10 bg-red-600 hover:bg-red-800 p-2 rounded-md shadow-2xl">
                                <SquarePen className="text-white bg-transparent" />
                            </div>
                        </button>
                    </div>

                    <DataUserAccount 
                        title="Nome"
                        description="NomeDoUsuário"
                    />
                    <DataUserAccount 
                        title="Data de Nascimento"
                        description="25/07/2000"
                    />
                    <DataUserAccount 
                        title="CPF"
                        description="123******90"
                    />
                    <DataUserAccount 
                        title="Telefone"
                        description="11098766789"
                    />
                    
                </div>

                <div className="w-full bg-white rounded-xl p-5 shadow-lg flex flex-col justify-center">

                    <div className="w-full flex justify-end">
                        <button>
                            <div className="w-10 h-10 bg-red-600 hover:bg-red-800 p-2 rounded-md shadow-2xl">
                                <SquarePen className="text-white bg-transparent" />
                            </div>
                        </button>
                    </div>

                    <DataUserAccount 
                        title="Cidade"
                        description="São Paulo"
                    />
                    <DataUserAccount 
                        title="Bairro"
                        description="Bela Vista"
                    />
                    <DataUserAccount 
                        title="CEP"
                        description="94948-130"
                    />
                    <DataUserAccount 
                        title="Rua"
                        description="Conselheiro de Andrade"
                    />
                    <DataUserAccount 
                        title="Complemento"
                        description="29, apt 10"
                    />


                </div>

                <div className="w-full bg-white rounded-xl p-5 shadow-lg flex flex-col justify-center">

                    <div className="w-full flex justify-end">
                        <button onClick={OpenChangePasswordModal}>
                            <div className="w-10 h-10 bg-red-600 hover:bg-red-800 p-2 rounded-md shadow-2xl">
                                <SquarePen className="text-white bg-transparent" />
                            </div>
                        </button>
                    </div>

                    <DataUserAccount 
                        title="E-mail"
                        description="joao.alves@senaisp.com"
                    />
                    <DataUserAccount 
                        title="Senha"
                        description="*****"
                    />


                </div>

                




            </main>

            <HomeFooter />
        </div>
    )
}