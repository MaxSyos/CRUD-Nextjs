import Botao from '../components/Botao'
import Layout from '../components/Layout'
import Table from '../components/Tabela'
import Cliente from '../core/Cliente'
import Formulario from '../components/Formulario'
import { useEffect, useState } from 'react'
import ClienteRepositorio from '../core/ClienteRepositorio'
import ColecaoCliente from '../Backend/db/ColecaoCliente'

export default function Home() {

  const repo : ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'> ('tabela')

  useEffect(obterTodos, [])

  function obterTodos(){
    repo.obterTodos().then(clientes =>{
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome)
  }

  function novoCliente(cliente: Cliente){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }

  

  return (
    <div className={`flex justify-center items-center h-screen 
          bg-gradient-to-r from-blue-500 to-purple-400 text-white text-2xl`}>
        <Layout titulo='Cadastro'>
          {visivel === 'tabela' ? ( 
            <>
              <div className=" flex justify-end">
                <Botao  
                  className={`mb-4 bg-gradient-to-r from-blue-700 to-blue-500`}
                  onClick={novoCliente}>
                    Novo Cliente
                </Botao>
              </div>
              <Table clientes={clientes} 
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExcluido}
              />
            </>
          ) : ( 
            <Formulario 
              cliente={cliente} 
              clienteMudou={salvarCliente}
              cancelado={() => setVisivel('tabela')}
            /> 
          )}

        </Layout>
    </div>
  )
}
