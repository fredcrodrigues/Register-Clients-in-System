import firebase from "../config"; // firebase version 7 >>
import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";


export default class CollectionClient implements ClientRepository{

    #convert = {
        toFirestore(client: Client){
            return {
                nome: client.name,
                old: client.name
            }
        },
        fromFirestore(snapshot:firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions):Client{
            const data = snapshot?.data(options)
            return new Client(data.name, data.old, snapshot.id)

        }
    }
    async save(client: Client): Promise<Client> {
       if(client?.id){
           this.colecttions().doc(client.id).set(client)
       }else{
          const docRef = await this.colecttions().add(client)
          const doc = await docRef.get()
          
          return doc.data()
        }
        
    }

    async del(client: Client): Promise<void> {
        return this.colecttions().doc(client.id).delete()
    }
    async getAll(client: Client): Promise<Client[]> {
        const query = await this.colecttions().get()
        return query.docs.map(doc  => doc.data()) ?? []
    }

    private colecttions(){
         return firebase
                .firestore().collection('client')
                .withConverter(this.#convert)
    }
}