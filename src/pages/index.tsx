import Layout from "../components/Layout"  //testabdo
import Client from "../core/Client"
import Table from "../components/Table"
import Button  from "../components/Button"
import Form from "../components/Form"
import { useState } from "react"

export default function Home() {
  const [client, setClient] = useState<Client>(Client.empty())
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const clients = [
    new Client('Test', 12, '1'),
    new Client('Fereds', 12, '2'),
    new Client('Test2', 12, '3'),
    new Client('Test2', 15, '4'),
    new Client('Test2', 56, '5')
    
  ]
 
  function clientSelected(client: Client){
      setClient(client)
      setVisible('form')
  }

  
function clientNew(){
    setClient(Client.empty())
    setVisible('form')
}

function clientDel(client: Client){
    console.log('trash', client.name)
  }


function saveClient(client: Client){
    
    console.log(client)
    setVisible('table')
}
  
  return (
    <div className={`
        flex content-center justify-center items-center h-screen 
        bg-gradient-to-r from-purple-500 to-purple-700
        text-white
        `}>

        
      <Layout title="Cdastro Simples">
        {visible === 'table' ? (
          <>
             <div className="flex justify-end">
                 <Button onClick={clientNew} 
                          cor="blue" 
                          className="mb-4"> Novo CLiente
                 </Button>
             </div>
           
           <Table clientSelect={clientSelected}
             clientDel={clientDel} 
             clients={clients}></Table>
          </>
        ):(
          <Form 
                client={client}
                clientAlter={saveClient}
                cancel={() => setVisible('table')}
          
          />
          )}
       

      </Layout>
      
    

        
          
    </div>
  )
}
