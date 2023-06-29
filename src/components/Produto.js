
export default function Produto( props ){
    return(
        <div className="border p-4 shadow-xl" key={props.produto.id}>
            <p className="text-xl font-bold">{props.produto.nome}</p>

            {
                props.descricao == true ? <p> {props.produto.descricao} </p> : ""
            }

            <p className="text-xl font-bold">{props.produto.preco}</p>
            <img src={props.produto.imagem} width={props.largura} />
          </div>
    )
}