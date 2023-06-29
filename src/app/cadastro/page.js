import Link from 'next/link'
function cadastro(){
    return(
        <div>
            <h1>Página De Cadastro</h1>
            <p> Não tem um login ainda? <Link href="/login">Clique aqui.</Link></p>
             <form>
                <input placeholder="Digite seu Nome" />
                <input placeholder="Digite seu email" />
                <input placeholder="Digite sua Senha" />
                <button>Salvar</button>
               
             </form>
        </div>
    )
}

export default cadastro;