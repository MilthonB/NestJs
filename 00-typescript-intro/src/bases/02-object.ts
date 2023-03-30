export const pokemonId = [1,2,10,20,30,40,50]




// Condiciona a un objeto liteal a que compla con los tipos
// de variables dentro de un objeto literal 
// ? valor opcional tambien se usa undefine como tipo atracez de pipe
interface Pokemon {
    id: number;
    name: string;
    age?: number
}

// Objectos literales
export const bulbasour: Pokemon  ={ 
    id: 1,
    name: 'Bulbasour'
}


export const charmander: Pokemon={
    id: 0,
    name: ""
}

// const a = {}
// a.toString()
// [object, Object] 


// tipo de datos never
export const pokemons: Pokemon[] = [];

pokemons.push(charmander, bulbasour)

//pokemonId.push(+'1')


console.log(pokemons)