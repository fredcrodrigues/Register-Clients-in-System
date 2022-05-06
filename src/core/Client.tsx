export default class Client{
    #id: string
    #name: string
    #old: number

    
    constructor(name: string, old: number, id: string = null){
        this.#id = id
        this.#name = name
        this.#old = old
        
    }

    static empty(){
        return new Client('', 0)
    }

    get id(){
        return this.#id
    }

    get name(){
        return this.#name
    }

    get old(){
        return this.#old
    }
}