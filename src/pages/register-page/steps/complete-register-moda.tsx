import { Link } from "react-router-dom";
import { PrimaryButton } from "../../../components/primary-button";

export function CompleteRegister(){
    return(
        <div className="flex flex-1 justify-center h-auto w-full">
            <div className='flex justify-center flex-col space-y-16 bg-white rounded-3xl w-[640px] px-9 py-14'>
                <h1 className="text-center text-3xl font-sans font-bold">Cadastro realizado com sucesso!</h1>
                <p className="text-center text-xl font-sans font-semibold">Você ja está pronto para aproveitar nossos produtos e ofertas, <br>
                </br> e esteja sempre preparado para novas promoções.</p>
                <Link to={`/`}>
                    <PrimaryButton>Avançar</PrimaryButton>
                </Link>
                
            </div>
        </div>
    )
}