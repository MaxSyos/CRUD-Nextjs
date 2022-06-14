import Client from "../core/client"

interface TableProps{
    clients: Client[]
}

export default function Table(props:TableProps){

    function renderizarCabecalho(){
        return(
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }

    function renderizarDados(){
        return(
            props.clients?.map((client, i) =>{
                return (
                    <tr key={client.id}>
                        <td>{client.id}</td>
                        <td>{client.nome}</td>
                        <td>{client.idade}</td>
                    </tr>
                )
            })
        )
    }

    return(
        <table>
            <thead>{renderizarCabecalho()}</thead>
            <tbody>{renderizarDados()}</tbody>
        </table>
    )
}