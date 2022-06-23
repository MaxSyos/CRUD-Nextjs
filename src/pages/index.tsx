import Botao from '../components/Botao'
import Layout from '../components/Layout'
import Table from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {

  const clientes = [
    new Cliente('Torus',     34, 1),
    new Cliente('Ana',       14, 2),
    new Cliente('Paulo',     24, 3),
    new Cliente('Cornelius', 44, 4),
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome)
  }
  return (
    <div className={`flex justify-center items-center h-screen 
          bg-gradient-to-r from-blue-500 to-purple-400 text-white text-2xl`}>
        <Layout titulo='Cadastro'>
          <div className=" flex justify-end">
            <Botao cor ='gray' className={`mb-4`}>Novo Cliente</Botao>
          </div>
          <Table clientes={clientes} 
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}/>
        </Layout>
    </div>
  )
}
