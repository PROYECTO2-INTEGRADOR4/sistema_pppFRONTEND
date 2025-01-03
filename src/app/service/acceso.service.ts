import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccesoService {
    private apiUrl = 'http://localhost:8080/accesos';

    constructor(private http: HttpClient) {}

    obtenerAccesosPorRol(nombreRol: string ): Observable<any> {
        const accessToken = localStorage.getItem('accessToken');
        console.log("accessToken en localStorage:", accessToken);
        const headers = new HttpHeaders({
            Authorization: `Bearer ${accessToken}`,
        });

        console.log(`Solicitando accesos con nombreRol=${nombreRol} y token=${accessToken}`);
        return this.http.get(`${this.apiUrl}/por-rol/${nombreRol}`, { headers });
    }

}