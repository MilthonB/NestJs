


// Los decoradores son funciones que añadem metodos extras 
// a las clases como si de una herencia se tratara

export class NewPokemon {


    constructor(
        public readonly id:number,
        public name:string
    ){}



    screem(){
        console.log(`${this.name.toLocaleUpperCase}!!!`)
    }


    speak(){
        console.log(`${this.name}, ${this.name}`)
    }

    
}

const MyDecorator = () =>{
    return (target: Function) => {
        // console.log(target)
        return NewPokemon;
    }
}


@MyDecorator()
export class Pokemon {


    constructor(
        public readonly id:number,
        public name:string
    ){}



    screem(){
        console.log(`${this.name.toLocaleUpperCase}!!!`)
    }


    speak(){
        console.log(`${this.name}, ${this.name}`)
    }

    
}


export const charmander = new Pokemon( 4, 'Charmander' );


charmander.screem()
charmander.screem()

