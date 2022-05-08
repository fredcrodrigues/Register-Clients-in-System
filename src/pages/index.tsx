import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"

export default function Home() {

  const clients = [
    
    new Client("Test", 12,'1'),
    new Client("Test2", 20,'2'),
    new Client("Test3", 22, '3')
  ]
  return (
    <div className={`
        flex content-center justify-center items-center h-screen 
        bg-gradient-to-r from-purple-500 to-purple-700
        text-white
        `}>

          <Layout  title="Cadastre Simple">

            <Table  clients={clients}>

            </Table>
          </Layout>
          
    </div>
  )
}
