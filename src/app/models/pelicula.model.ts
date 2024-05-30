
export class Pelicula {
    id: number;
    titulo: string;
    anio: number;
    director: string;
    genero: string;
    sinopsis: string;
    imagen: string;

    constructor(id: number, titulo: string, anio: number, director: string, genero: string, sinopsis: string, imagen: string) {
        this.id = id;
        this.titulo = titulo;
        this.anio = anio;
        this.director = director;
        this.genero = genero;
        this.sinopsis = sinopsis;
        this.imagen = imagen;
    }
}

