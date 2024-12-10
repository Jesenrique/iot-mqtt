import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Medicion } from 'src/app/interfaces/medicion';

@Injectable({
  providedIn: 'root'
})
export class MedicionesService {

  constructor(private _http: HttpClient) {}

  getMediciones (id:number):Promise<Medicion[]>{
    const url = `http://localhost:8000/detalle/${id}`; 
    return firstValueFrom(this._http.get<Medicion[]>(url));
  }

  postMedicion(medicion: Medicion) {
    const url = 'http://localhost:8000/detalle';
    return firstValueFrom(this._http.post(url, medicion));
  }
  
}




