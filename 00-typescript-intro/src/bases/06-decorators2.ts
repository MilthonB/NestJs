

// Los decoradores son funciones que lo que hacen es expandir las propiedades de
// una clase un metodo o una propiedad


const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
      // console.log({target})
      return {
        get() {
          const wrapperFn = (...args: any[]) => {
            console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
            //! Llamar la función propiamente con sus argumentos
            propertyDescriptor.value.apply(this, args); 
          }
          return wrapperFn;
        }
      }
    }   
}



export class Pokemon {


    constructor(
        public readonly id:number,
        public name:string
    ){}



    screem(){
        console.log(`${this.name.toLocaleUpperCase}!!!`)
    }

    @Deprecated('Mots use speak2 method instead')
    speak(){
        console.log(`${this.name}, ${this.name}`)
    }

    speak2
    (){
        console.log(`${this.name}, ${this.name}`)
    }

    
}


export const charmander = new Pokemon( 4, 'Charmander' );

charmander.speak()
