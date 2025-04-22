import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Medicion } from 'src/app/interfaces/medicion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicionesService {
  private baseUrl = environment.apiUrl; 

  constructor(private _http: HttpClient) {}

  getMediciones (id:number):Promise<Medicion[]>{
    const url = `${this.baseUrl}/detalle/${id}`; 
    return firstValueFrom(this._http.get<Medicion[]>(url));
  }

  getUltimaMedicion(id: number): Promise<Medicion> {
    const url = ` ${this.baseUrl}/detalle/ultimo/${id}`; 
    return firstValueFrom(this._http.get<Medicion>(url));
  }

  postMedicion(medicion: Medicion) {
    const url = `${this.baseUrl}/detalle`;
    return firstValueFrom(this._http.post(url, medicion));
  }
  
}




