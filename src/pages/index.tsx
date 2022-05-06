import Layout from "../components/Layout"  //testabdo
import Client from "../core/Client"
import Table from "../components/Table"
import Button  from "../components/Button"
import Form from "../components/Form"
import { useState } from "react"

export default function Home() {
  const clients = [
    new Client('Test', 12, '1'),
    new Client('Fereds', 12, '2'),
    new Client('Test2', 12, '3'),
    new Client('Test2', 15, '4'),
    new Client('Test2', 56, '5'),
    
  ]
  function clientSelected(client: Client){
      console.log(client.name)
  }

  function clientTrash(client: Client){
    console.log('Lixo', client.name)
  }


  function  saveClient(client: Client){
    console.log(client)
  }
  const [visible, setVisible] = useState<'tabela' | 'form'>('tabela')
  return (
    <div className={`
        flex content-center justify-center items-center h-screen 
        bg-gradient-to-r from-purple-500 to-purple-700
        text-white
        `}>

        
      <Layout title="Cdastro Simples">
        {visible === 'tabela' ? (
          <>
             <div className="flex justify-end">
                 <Button onClick={() => setVisible('form')} 
                          cor="blue" 
                          className="mb-4"> Novo CLiente
                 </Button>
             </div>
           
           <Table clientSelect={clientSelected}
             clientTrash={clientTrash} 
   
             clients={clients}></Table>
          </>
        ):(
          <Form 
                client={clients[0]}
                clientAlter={saveClient}
                cancel={() =>  setVisible('tabela')}
          
          />
          )}
       

      </Layout>
      
    

        
          
    </div>
  )
}
