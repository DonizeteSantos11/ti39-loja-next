
'use client'
import { useState, useEffect } from "react"
import { busca, buscaTodos } from "./model/produtos"
import supabase from "./model/supabase"
import Link from 'next/link';
import Produto from "@/components/Produto";

export default function Home() {

const [produtos, alteraprodutos ] = useState([])

useEffect(()=> {
  async function dados(){
    const resposta = await buscaTodos();
   alteraprodutos(resposta.data);
  }
    dados();
}, [])

  return (
    <div  className="grid grid-cols-3 place-items-center">
      
      

      {
        produtos == 0 ? <p> Carregando... </p> :
        produtos.map(produto => 
            <Link href={ "/produto/" + produto.id}>
              <Produto produto={produto} largura={150}/>
          </Link>  
           )
      }

    </div>
  )
}
