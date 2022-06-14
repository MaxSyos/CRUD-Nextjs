import Client from "../core/client"

interface TableProps{
    clients: Client[]
}

export default function Table(props:TableProps){

    function renderizarCabecalho(){
        return(
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
            </tr>
        )
    }

    function renderizarDados(){
        return(
            props.clients?.map((client, i) =>{
                return (
                    <tr key={client.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                        <td className="text-left p-4">{client.id}</td>
                        <td className="text-left p-4">{client.nome}</td>
                        <td className="text-left p-4">{client.idade}</td>
                    </tr>
                )
            })
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