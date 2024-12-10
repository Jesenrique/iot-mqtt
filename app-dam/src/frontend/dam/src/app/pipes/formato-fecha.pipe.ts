import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoFecha',
  standalone: true
})
export class FormatearFechaPipe implements PipeTransform {

  

  transform(fecha: string): string {

    const fechaOriginal = new Date(fecha);
    fechaOriginal.setHours(fechaOriginal.getHours() - 5);

    const meses = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    const dia = fechaOriginal.getDate();
    const mes = meses[fechaOriginal.getMonth()];
    const anio = fechaOriginal.getFullYear();

    let horas = fechaOriginal.getHours();
    const minutos = fechaOriginal.getMinutes().toString().padStart(2, '0');

    return `${dia} de ${mes} de ${anio} a las ${horas}:${minutos}`;
  }
}
