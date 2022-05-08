import { useState } from "react"
import Input from "../components/Input"
import Client from "../core/Client"
import Button from "../components/Button"

interface FormProps{
     client: Client
     clientAlter?: (client: Client) => void  
     cancel?: () => void
}

export default function Form( props: FormProps){
    const id = props.client ?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [old, setOld] = useState(props.client?.old ?? 0)
    return(
        <div>
            {id ?(

                <Input text="Código" val={id}/>

            ): false}
            <Input 
                val={name} 
                type="text" 
                text="Nome"
                className="mb-5"
                valUpdate={setName}/>

            <Input
             val={old} 
             type="number" 
             text="Idade"
             className="mb-5"
             valUpdate={setOld} />

            <div className="flex  justify-end mt-3">
                <Button onClick={() => props.clientAlter?.(new Client(name, old, id))} cor="blue" className="mar-2">
                    {id ?  'Alterar': 'Salvar'}
                </Button>
                <Button onClick={props.cancel }>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}