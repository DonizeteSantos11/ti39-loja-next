import Link from 'next/link'

function login(){
    return(
        <div>
             <h1> Página de Login </h1>
             <p> Não tem um Cadastro ainda? <Link href="/cadastro">Clique aqui.</Link></p>
             <form>
                <input placeholder="Digite seu email" />
                <input placeholder="Digite sua senha" />
                <button> Entrar </button>
             </form>
        </div>
       
    )
}
export default login;