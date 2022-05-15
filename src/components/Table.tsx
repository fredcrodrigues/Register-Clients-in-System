import Client from "../core/Client" //kddk
import { IconeEdit, IconeTrash } from "./Icons"
interface TableProps{
    clients: Client[]
    clientSelect?: (client: Client) => void 
    clientDel?: (client: Client) => void 

}

export default function Table(props: TableProps){
    const showActions = props.clientDel || props.clientSelect
    function renderHead(){
        return(
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {showActions ? <th className={"p-4"}>Ações</th>: false}
            </tr>
        )
    }


    function renderBody(){
        return props.clients?.map((client, i) => {
            return(
                <tr key={client.id} className= {`${ i % 2 ==0? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className={"text-left p-4"}>{client.id}</td>
                    <td className={"text-left p-4"}>{client.name}</td>
                    <td className={"text-left p-4"}>{client.old}</td>
                    {showActions? renderActions(client): false }
                </tr>

            )}
        )}

    function renderActions(client){
        return(
            <td className={"flex justify-center"}>
                { props.clientSelect ? (
                        <button onClick={() => props.clientSelect?.(client)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1 
                        hover:bg-purple-50
                    `}>
                        {IconeEdit}
                    </button>
                ): false}
                { props.clientDel ? (
                    <button onClick={() => props.clientDel?.(client)} className={`
                    flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1 
                    hover:bg-purple-50`}>
                        {IconeTrash}
                    </button>
                ): false}              
            </td>
        )
    }
    return(
        <table className={`w-full rounded-xl overflow-hidden`}>
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800 
            
            `}>
            {renderHead()}
            </thead>
         <tbody>
             {renderBody()}
         </tbody>

        </table>
    )
}