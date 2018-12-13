export class Todo{

    /*public tarea: string;

    constructor(tarea){
        this.tarea = tarea;
    }*/

    constructor(
        public tarea:string,
        public importante: boolean,
        public terminado: boolean
    ){}

}