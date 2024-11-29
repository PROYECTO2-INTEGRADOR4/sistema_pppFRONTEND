import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PerfilService {

    private apiUrl = 'http://localhost:8080/perfil';

    constructor(private http: HttpClient) { }

    getPerfilData(username: String): Observable<any> {
        const accessToken = localStorage.getItem('accessToken');
        console.log("accessToken en localStorage:", accessToken);
        const headers = new HttpHeaders({
            Authorization: `Bearer ${accessToken}`,
        });
        
        return this.http.get<any>(`${this.apiUrl}/${username}`, { headers });
    }
}