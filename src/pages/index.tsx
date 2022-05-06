import Layout from "../components/Layout"  //testabdo
import Client from "../core/Client"
import Table from "../components/Table"

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
  return (
    <div className={`
        flex content-center justify-center items-center h-screen 
        bg-gradient-to-r from-purple-500 to-purple-700
        text-white
        `}>

        
      <Layout title="Testando">
         <Table clientSelect={clientSelected} clients={clients}></Table>
      </Layout>
      
    

        
          
    </div>
  )
}
