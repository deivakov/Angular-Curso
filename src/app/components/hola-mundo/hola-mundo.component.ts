import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula.model'; 


@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hola-mundo.component.html',
  styleUrl: './hola-mundo.component.css'
})
export class HolaMundoComponent {

    
  public peliculas: Pelicula[] = [
    new Pelicula(1, 'El Padrino', 1972, '<NAME>', 'Drama',
      'Un hombre que se casa con una mujer que no es su esposa, se encuentra en una situación difícil para él y para la mujer. El hombre se encuentra en una situación de pánico y de miedo, y decide tomar la decisión de abandon a su esposa y de irse a vivir con su padre.', 'https://wmagazin.com/wp-content/uploads/2022/03/ES-ppa-Elpadrino-50anos-Coppola-Puzo.jpg'),
    new Pelicula(2, 'Título 2', 2000, 'Director 2', 'Género 2', 'Descripción 2', 'https://ejemplo.com/imagen2.jpg'),
    new Pelicula(3, 'Título 3', 2010, 'Director 3', 'Género 3', 'Descripción 3', 'https://ejemplo.com/imagen3.jpg')
  ];

     

}
