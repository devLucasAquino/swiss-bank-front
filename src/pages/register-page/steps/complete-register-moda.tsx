import { Link } from "react-router-dom";

export function CompleteRegister(){
    return(
        <div className="flex flex-1 justify-center h-auto w-full">
            <div className='flex justify-center flex-col space-y-16 bg-white rounded-3xl w-[640px] px-9 py-14'>
                <h1 className="text-center text-3xl font-sans font-bold">Cadastro realizado com sucesso!</h1>
                <p className="text-center text-xl font-sans font-semibold">Você ja está pronto para aproveitar nossos produtos e ofertas, <br>
                </br> e esteja sempre preparado para novas promoções.</p>
                <div className='flex justify-center'>
                    <Link to={`/`}>
                        <button className='bg-red-600 py-2 px-20 rounded-xl hover:bg-red-700'>
                            <span className='text-zinc-50 font-bold text-lg'>Avançar</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}