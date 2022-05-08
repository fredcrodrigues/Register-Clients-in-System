import Client from "../core/Client"

interface TableProps{
    clients: Client[]
}

export default function Table(props){

    function renderHead(){
        return(   
        <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Ação</th>
        </tr>)
    }

    function renderData(){
        return props.clients?.map((client,i) => {
                return (
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client.name}</td>
                            <td>{client.old}</td>
                        </tr>
            )   } 
        )
    }
    return(
        <table>
            <thead>
                {renderHead()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
           
          
        </table>
    )
}