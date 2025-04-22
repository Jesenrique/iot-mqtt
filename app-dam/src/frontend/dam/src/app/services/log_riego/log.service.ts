import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private baseUrl = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  getLastLog (id:number) {
    const url = `${this.baseUrl}/log/${id}`; 
    return firstValueFrom(this._http.get(url));
  }
}
