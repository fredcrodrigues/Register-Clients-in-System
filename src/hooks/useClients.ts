import { useEffect, useState } from "react"
import CollectionClient from "../backend/db/CollectionClient"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import useTableorForm from "./useTbleorForm"

export default function  useClients(){
    const repo: ClientRepository = new CollectionClient()

    const {tableVisible, formVisible, showForm, showTable}= useTableorForm()

    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([])
  
  
    useEffect( getAllClients, [])
   
    function getAllClients(){
      repo.getAll().then(clients => {
        setClients(clients)
        showTable()
      })
    }
   
    function selectClient(client: Client){
        setClient(client)
        showForm()
    }
  
    
  function newClient(){
      setClient(Client.empty())
      showForm()
  }
  
  async function  delClient(client: Client){
    await repo.del(client)
    getAllClients()
  }
  
  async function saveClient(client: Client){
     await repo.save(client)
      getAllClients()

  }
  return {
    client,
    clients,
    saveClient,
    delClient,
    newClient, 
    selectClient,
    getAllClients,
    tableVisible,
    showTable
  }
    
}