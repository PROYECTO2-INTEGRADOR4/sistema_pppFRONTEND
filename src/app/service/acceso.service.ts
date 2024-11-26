import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccesoService {
    private apiUrl = 'http://localhost:8080/accesos';

    constructor(private http: HttpClient) {}

    obtenerAccesosPorRol(idRol: number ): Observable<any> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`,
        });
        console.log(`Solicitando accesos con idRol=${idRol} y token=${token}`);
        return this.http.get(`${this.apiUrl}/por-rol/${idRol}`, { headers });
    }
}