import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Dispositivo } from '../interfaces/dispositivo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
  private baseUrl = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  getDispositivos () {
    return firstValueFrom(this._http.get(`${this.baseUrl}/dispositivo`))
  }

  putEstadoDispositivo (data:object) {
    const url = `${this.baseUrl}/dispositivo`;
    return firstValueFrom(this._http.put(url, data));
  }
}
