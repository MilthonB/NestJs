import axios from 'axios';


// Inyeccion de dependencias de terceros 
//  La inyteccion puede ser una clase o una interfaz 
//  Solo se necesita tener las reglas que se necesitan 

export interface HttpAdapter{

    get<T>(url:string):Promise<T>;

}


// todo lo que se implemnte tiene que esta dentro de la clase 
// Por ejemplo cuando se implementa httpAdapter la clase tiene que nere iimplementado
// lo que se define en la interfaces en este caso el get 


export class PokeApiFetchAdapter implements HttpAdapter{

    async get<T>(url:string): Promise<T>{
        const resp = await fetch(url);
        const data:T = await resp.json();

        return data;
    }
}


export class PokeApiAdapter implements HttpAdapter{

    private readonly axios = axios;
    async get<T>(url:string): Promise<T>{
        // peticion get
        const { data } = await this.axios.get<T>(url); 
        return data;
    }


    async post(url:string, data:any){

    }

    async patch(url:string, data:any){
        
    }

    async delte(url:string){
        
    }


}

