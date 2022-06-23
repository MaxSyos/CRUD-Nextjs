import Cliente from "../core/Cliente"
import { IconEdit, IconTrash } from "./Icons"

interface TableProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
    
}

export default function Tabela(props:TableProps){

    const exibirAcoes =  props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho(){
        return(
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="text-left p-4">Ações</th> : false}    
            </tr>
        )
    }


    function renderizarDados(){
        return(
            props.clientes?.map((cliente, i) =>{
                return (
                    <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                        <td className="text-left p-4">{cliente.id}</td>
                        <td className="text-left p-4">{cliente.nome}</td>
                        <td className="text-left p-4">{cliente.idade}</td>
                        {exibirAcoes ? renderizarAcoes(cliente) : false}
                    </tr>
                )
            })
        )
    }

    function renderizarAcoes(cliente: Cliente){
        return(
            <td className={`flex`}>
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`flex justify-center item-center text-green-600 p-2 m-1 rounded-full hover:bg-purple-50`}>
                        {IconEdit}
                    </button>
                ) : false}
                {props.clienteSelecionado ? (
                    <button onClick={()=> props.clienteExcluido?.(cliente)} className={`flex justify-center item-center text-red-600 p-2 m-1 rounded-full hover:bg-orange-50`}>
                        {IconTrash}
                    </button>
                ) : false}
            </td>
        )
    }

    return(
        <table className={`w-full rounded-xl overflow-hidden`}>
            <thead className={`bg-gradient-to-br from-blue-400 to-purple-800 
                text-gray-300
            `}>
                {renderizarCabecalho()}</thead>
            <tbody>{renderizarDados()}</tbody>
        </table>
    )
}