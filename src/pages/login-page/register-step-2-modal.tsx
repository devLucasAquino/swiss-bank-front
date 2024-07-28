import { ChevronLeft } from "lucide-react"

interface RegisterStep2Props{
    ufSelected: string,
    setUfSelected: (value: string) => void,
}

export function RegisterStep2({
    ufSelected,
    setUfSelected,
}:RegisterStep2Props){

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setUfSelected(event.target.value);
    };

    const UFs = [
        { state: "Acre", acronym: "AC" },
        { state: "Alagoas", acronym: "AL" },
        { state: "Amapá", acronym: "AP" },
        { state: "Amazonas", acronym: "AM" },
        { state: "Bahia", acronym: "BA" },
        { state: "Ceará", acronym: "CE" },
        { state: "Distrito Federal", acronym: "DF" },
        { state: "Espírito Santo", acronym: "ES" },
        { state: "Goiás", acronym: "GO" },
        { state: "Maranhão", acronym: "MA" },
        { state: "Mato Grosso", acronym: "MT" },
        { state: "Mato Grosso do Sul", acronym: "MS" },
        { state: "Minas Gerais", acronym: "MG" },
        { state: "Pará", acronym: "PA" },
        { state: "Paraíba", acronym: "PB" },
        { state: "Paraná", acronym: "PR" },
        { state: "Pernambuco", acronym: "PE" },
        { state: "Piauí", acronym: "PI" },
        { state: "Rio de Janeiro", acronym: "RJ" },
        { state: "Rio Grande do Norte", acronym: "RN" },
        { state: "Rio Grande do Sul", acronym: "RS" },
        { state: "Rondônia", acronym: "RO" },
        { state: "Roraima", acronym: "RR" },
        { state: "Santa Catarina", acronym: "SC" },
        { state: "São Paulo", acronym: "SP" },
        { state: "Sergipe", acronym: "SE" },
        { state: "Tocantins", acronym: "TO" }
    ];


    return(
        <form className='w-full flex justify-center items-center'>
                 <div className='flex flex-col space-y-10 bg-white rounded-2xl w-[640px] px-9 py-14'>

                     <div className="space-y-6"> 
                         <button className='size-12 bg-red-700 rounded-full justify-start'>
                             <div className='flex justify-center'>
                                <ChevronLeft className='size-8 text-zinc-50'/>
                             </div>
                         </button>
                         <div>
                             <h3 className='text-3xl font-bold font-sans'>Cadastre-se</h3>
                             <p className='font-medium text-zinc-600'>Todos os campos são obrigatórios.</p>
                         </div>
                     </div>

                     <div className='space-y-3'>
                         
                             <div className='flex flex-col space-y-2'>
                                 <h2 className='font-bold text-lg font-sans'>CEP</h2>
                                 <input className='rounded-md border-2 border-zinc-400 p-3 w-auto'
                                     type="text"
                                     placeholder='Insira seu CEP'    
                                 />
                             </div>

                            <div className="flex items-center gap-5 ">

                                <div className='flex flex-col space-y-2 flex-1'>
                                    <h2 className='font-bold text-lg font-sans'>Cidade</h2>
                                    <input className='rounded-md border-2 border-zinc-400 p-3 w-auto'
                                        type="text"
                                        placeholder='dd/mm/aaaa'    
                                    />
                                </div>

                                <div className='flex flex-col space-y-2'>
                                    <h2 className='font-bold text-lg font-sans'>UF</h2>
                                    <div className="flex items-center justify-center w-40 h-11 rounded-md border-2 border-zinc-400 py-6">
                                        <select className="block w-28 h-11 bg-white rounded-md shadow-sm" name="uf" value={ufSelected} onChange={handleChange}>
                                            <option value='' disabled />
                                            {UFs.map((uf) => {
                                                return(    
                                                    <option key={uf.acronym} value={uf.acronym}
                                                    className="text-start font-sans">
                                                        {uf.acronym}
                                                    </option>
                                                )
                                            })}
                                        </select>

                                    </div>
                                </div>

                            </div>

                             <div className='flex flex-col space-y-2'>
                                 <h2 className='font-bold text-lg font-sans'>Logradouro</h2>
                                 <input className='rounded-md border-2 border-zinc-400 p-3 w-auto'
                                     type="text"
                                     placeholder='Insira seu logradouro'    
                                 />
                             </div>


                     </div>

                     <div className='flex justify-center'>
                         <button  className='bg-red-600 py-2 px-20 rounded-xl hover:bg-red-700'>
                             <span className='text-zinc-50 font-bold text-lg'>Avançar</span>
                         </button>
                     </div>

                 </div>
             </form>
    )
}