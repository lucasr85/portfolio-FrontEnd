export class Educacion {
    id?:number;
    nombreE:string;
    descripcionE:string;
    nivel:string;
    periodo:string;
    estado:string;

    constructor(nombreE: string, descripcionE: string, nivel:string, periodo:string, estado:string){
        this.nombreE=nombreE;
        this.descripcionE=descripcionE;        
        this.nivel=nivel;
        this.periodo=periodo;
        this.estado=estado;
    }  
}
