import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Persona {
    id: number;
    nombres: string;
    apellidos: string;
    carrera: string;
    dni: string;
    telefono: string;
    email: string;
}

@Injectable({
    providedIn: 'root'
})
export class PersonaService {
    private apiUrl = 'http://localhost:8080/personas';

    constructor(private http: HttpClient) { }

    getAllPersonas(): Observable<Persona[]> {
        const accessToken = localStorage.getItem('accessToken');
        console.log("accessToken en localStorage:", accessToken);
        const headers = new HttpHeaders({
            Authorization: `Bearer ${accessToken}`,
        });
        return this.http.get<Persona[]>(`${this.apiUrl}/detalles`, { headers }); 
    }
}
