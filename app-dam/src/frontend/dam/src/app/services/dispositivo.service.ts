import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Dispositivo } from '../interfaces/dispositivo';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  constructor(private _http: HttpClient) { }

  getDispositivos () {
    return firstValueFrom(this._http.get('http://localhost:8000/dispositivo'))
  }

  putEstadoDispositivo (data:object) {
    const url = 'http://localhost:8000/dispositivo';
    return firstValueFrom(this._http.put(url, data));
  }
}
