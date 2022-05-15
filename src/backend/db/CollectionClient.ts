import firebase from "../config"; // firebase version 7 >>
import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";


export default class CollectionClient implements ClientRepository{

    #convert = {
        toFirestore(client: Client){
            return {
                name: client.name,
                old: client.old,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Client{
            const dates = snapshot.data(options)
            return new Client( dates.name,  dates.old, snapshot.id)

        }
    }
    async save(client: Client): Promise<Client> {
       if(client?.id){
            await this.colecttions().doc(client.id).set(client)
            return client
       }else{
          const docRef = await this.colecttions().add(client)
          const doc = await docRef.get()
          
          return doc.data()
        }
        
    }

    async del(client: Client): Promise<void> {
        return this.colecttions().doc(client.id).delete()
    }
    async getAll(): Promise<Client[]> {
        const query = await this.colecttions().get()
        return query.docs.map(doc  => doc.data()) ?? []
    }

    private colecttions(){
         return firebase
         .firestore().collection('client')
         .withConverter(this.#convert)
    }
}