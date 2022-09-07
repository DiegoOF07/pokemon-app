export class SingularPokemon{
    constructor(
        public id: string,
        public name:string,
        public ability:Array<Object>,
        public game_indices:Array<Object>,
        public sprites:{
            front_default: string,
        },
        public weight:number
    ){}
}