import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private _http: HttpClient) { }

  getLastLog (id:number) {
    const url = `http://localhost:8000/log/${id}`; 
    return firstValueFrom(this._http.get(url));
  }


}
