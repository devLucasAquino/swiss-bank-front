import { BackButton } from "../../components/back-button";
import { PrimaryButton } from "../../components/primary-button";
import { UserInput } from "../../components/user-input";

interface ChangePasswordModalProps{
    CloseChangePasswordModal: () => void,
}

export function ChangePasswordModal({
    CloseChangePasswordModal,
}:ChangePasswordModalProps){
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="h-auto flex items-center justify-center">
                <form className="flex flex-col bg-white items-center px-9 py-14 rounded-2xl w-[640px]">
                    <div className="flex flex-col justify-start">
                        <BackButton onClick={CloseChangePasswordModal}/>
                        <div className="flex flex-col space-y-2 justify-start items-center">
                            <h1 className="text-2xl font-medium">Altere sua senha</h1>
                            <h3 className="text-xl text-zinc-600 ml-3">emaildousuario@senaisp.com</h3>
                        </div>
                    </div>

                    <div className="flex space-y-6 flex-col">
                        <UserInput 
                            title="Insira sua senha atual"
                            subtitle=""
                        />
                        <UserInput 
                            title="Digite sua nova senha"
                            subtitle=""
                        />
                        <UserInput 
                            title="Confirme sua nova senha"
                            subtitle=""
                        />

                        <PrimaryButton>Confirmar</PrimaryButton>
                    </div>

                    
                </form>
            </div>
        </div>
    )
}