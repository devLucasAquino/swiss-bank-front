export function HomeFooter(){
    return(
        <footer className="bg-gradient-to-t from-red-900 to-red-600 flex justify-between px-8">
                
                <div className="flex items-center">
                    <p className="text-zinc-100 text-xl font-light italic">© 2024 Senai. Todos os direitos reservados.</p>
                </div>


                <div className="flex items-center p-3">
                    <nav className="flex space-x-7">
                        <p className="text-zinc-100 text-xl font-light italic">Politíca de Privacidade</p>
                        <p className="text-zinc-100 text-xl font-light italic">Termos de Uso</p>
                        <p className="text-zinc-100 text-xl font-light italic">Contatos</p>
                    </nav>
                </div>
            </footer>
    )
}