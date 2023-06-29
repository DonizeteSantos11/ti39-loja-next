'use client'
import { buscalista } from "../model/produtos";
import { useEffect, useState } from "react";
import { busca } from "../model/produtos";
function carrinho(){

    const [produtos, alteraProdutos] = useState([]);

    useEffect(()=> {
        let objeto = localStorage.getItem("carrinho")
        objeto = JSON.parse(  objeto );
        // console.log(localStorage.getItem("carrinho"))

        async function dados(){
            const lista = objeto.map(o => o.id);
            const resposta = await buscalista( lista );
            alteraProdutos(resposta.data );
        }
        dados();

    }, [])



    return(
        <div>
            <h1>Carrinho</h1>
            <p> Quantidade de produtos: 0 </p>
            <p> Total do carrinho: R$ 0 </p>
            <hr/>


            {
                produtos == 0 ? <p> Seu carrinho ainda esta vazio </p> :
                produtos.map(objeto =>
                    
                    <div>
                        <p>{objeto.nome}</p>
                        <p>{objeto.preco}</p>
                        <img src={objeto.imagem}/>

                    </div>
                    )
                
            }

            
            
        </div>
    )
}

export default carrinho;