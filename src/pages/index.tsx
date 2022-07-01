import Botao from '../components/Botao'
import Layout from '../components/Layout'
import Table from '../components/Tabela'
import Cliente from '../core/Cliente'
import Formulario from '../components/Formulario'
import { useEffect, useState } from 'react'
import ClienteRepositorio from '../core/ClienteRepositorio'
import ColecaoCliente from '../Backend/db/ColecaoCliente'

import useClientes from '../hooks/useClientes'

export default function Home() {

  const {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  

  return (
    <div className={`flex justify-center items-center h-screen 
          bg-gradient-to-r from-blue-500 to-purple-400 text-white text-2xl`}>
        <Layout titulo='Cadastro'>
          {tabelaVisivel ? ( 
            <>
              <div className=" flex justify-end">
                <Botao  
                  cor = 'blue'
                  className={`mb-4`}
                  onClick={novoCliente}>
                    Novo Cliente
                </Botao>
              </div>
              <Table clientes={clientes} 
                clienteSelecionado={selecionarCliente}
                clienteExcluido={excluirCliente}
              />
            </>
          ) : ( 
            <Formulario 
              cliente={cliente} 
              clienteMudou={salvarCliente}
              cancelado={exibirTabela}
            /> 
          )}

        </Layout>
    </div>
  )
}
