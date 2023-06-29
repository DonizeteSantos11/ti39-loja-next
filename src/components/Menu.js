import Link from 'next/link'


function Menu(){
    return(
        <nav className="bg-rose-300 text-white p-1 text-2xl">
        <h1 className="bg-red-200 text-center text-black m-5 p-10">Doni store</h1>
            <ul className="flex gap-4 justify-center">
                <li className="border p-5 hover:bg-black transition:-all "><Link href="/">Inicio</Link></li>
                <li className="border p-5 hover:bg-black transition:-all "><Link href="/carrinho">Carinho</Link></li>
                <li className="border p-5 hover:bg-black transition:-all "><Link href="/cadastro">Cadastro</Link></li>
                <li className="border p-5 hover:bg-black transition:-all "> <Link href="/login">Login</Link> </li>
                
            </ul>
        </nav>
    )
}

export default Menu;