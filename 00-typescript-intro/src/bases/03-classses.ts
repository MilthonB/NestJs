import axios from 'axios';
import { PokeapiResponse, Move } from '../interfaces/pokeapi-response.interface';


export class Pokemon {

    //  public id: number;
    //  public name: string;


    //  constructor (id: number, name: string){
    //     this.id = id;
    //     this.name = name;
    //  }


    get imageUrl():string{

        return `http://pokemon.com/${this.id}.jpg`

    }

     constructor( public id:number, public name:string,
        ){
     }

     public scream(){
        console.log(`${this.name.toUpperCase()}!!!`)
     }

     public speak(){
        console.log(`${this.name}, ${this.name}`)
     }

     async getMoves(): Promise<Move[]>{
        // const moves = 10;

        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves[0].move.name);
        
        return data.moves;
     }

}


export const charmander = new Pokemon(4, 'Charmander');



// console.log(charmander.getMoves());
charmander.getMoves();

// charmander.scream()
// charmander.speak()
