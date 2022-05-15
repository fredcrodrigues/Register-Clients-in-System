import Layout from "../components/Layout"  //testabdo
import Table from "../components/Table"
import Button  from "../components/Button"
import Form from "../components/Form"
import useClients from "../hooks/useClients"

export default function Home() {
  const {client, clients, showTable, tableVisible, saveClient, delClient,  newClient, selectClient,  getAllClients }= useClients()
 
  return (
    <div className={`
        flex content-center justify-center items-center h-screen 
        bg-gradient-to-r from-purple-500 to-purple-700
        text-white
        `}>

        
      <Layout title="Cdastro Simples">
        {tableVisible ? (
          <>
             <div className="flex justify-end">
                 <Button onClick={newClient} 
                          cor="blue" 
                          className="mb-4"> Novo CLiente
                 </Button>
             </div>
           
           <Table clientSelect={selectClient}
             clientDel={delClient} 
             clients={clients}></Table>
          </>
        ):(
          <Form 
                client={client}
                clientAlter={saveClient}
                cancel={showTable}
          
          />
          )}
       

      </Layout>
      
    

        
          
    </div>
  )
}
