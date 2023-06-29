'use client'

import { busca } from "@/app/model/produtos";
import Produto from "@/components/Produto";
import { useEffect, useState } from "react"


export default function produtoid( props ){

    const id = props.params.id

    const [quantidade, alteraQuantidade] = useState ( 1 )
    const [produto, alteraProduto] = useState(null);


    function addcarrinho(){

        let carrinho = localStorage.getItem("carrinho");
        carrinho = JSON.parse( carrinho );


       let objeto = {id: id, quantidade: quantidade }
        carrinho.push(objeto)
        carrinho = JSON.stringify(carrinho)

    //    objeto =  JSON.stringify(objeto)

        localStorage.setItem("carrinho",carrinho)
    }




    useEffect(()=> {
        async function data(){
            const resposta = await  busca( id );

            if( resposta.status == 200 ){
                alteraProduto(resposta.data[0])
            }            
        }
        data();
    }, []);

    return(
        <div>

            {
            produto == null ? <p> Carregando... </p> :
            <div className="w-1/4 m-auto">
                <Produto produto={produto} descricao={true} largura={350}/>
                <label>
                    Quantidade:
                    <input type="number" onChange={(e)=>alteraQuantidade(e.target.value)}/>
                </label>

                <button onClick={()=> addcarrinho()}> Adicionar ao carrinho </button>


            </div>

            }


            
        </div>
    )
}