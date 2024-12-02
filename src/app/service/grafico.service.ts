import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  private apiurl = 'http://localhost:8080/usuarios/totalcarrera'

  constructor(private http: HttpClient) { }

  getDatosGrafico(): Observable<any[]> {
    const accessToken = localStorage.getItem('accessToken');
        console.log("accessToken en localStorage:", accessToken);
        const headers = new HttpHeaders({
            Authorization: `Bearer ${accessToken}`,
        });
        
    return this.http.get<any[]>(this.apiurl, { headers });
  }
}
