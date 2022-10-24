export class Educacion {
    id?:number;
    nombreE:string;
    descripcionE:string;
    nivel:string;
    periodo:string;
    estado:string;
    logo: string;

    constructor(nombreE: string, descripcionE: string, nivel:string, periodo:string, estado:string,logo:string){
        this.nombreE=nombreE;
        this.descripcionE=descripcionE;        
        this.nivel=nivel;
        this.periodo=periodo;
        this.estado=estado;
        this.logo=logo;
    }  
}
