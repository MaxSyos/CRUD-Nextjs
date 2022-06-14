import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/client'

export default function Home() {

  const clients = [
    new Client('Torus',     34, 1),
    new Client('Ana',       14, 2),
    new Client('Paulo',     24, 3),
    new Client('Cornelius', 44, 4),
  ]


  return (
    <div className={`flex justify-center items-center h-screen 
      bg-gradient-to-r from-blue-500 to-purple-400 text-white text-2xl`}>
        <Layout titulo='Cadastro'>
          <Table clients={clients}></Table>
        </Layout>
    </div>
  )
}
