import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Estudiante {
    nombres: string;
    apellidos: string;
    carrera: string;
    codigo: string;
    dni: string;
    telefono: string;
    email: string;
    correo_institucional: string;
    plan: string;
}

@Injectable({
    providedIn: 'root'
})

export class EstudianteService {
    private apiUrl = 'http://localhost:8080/estudiantes';

    constructor(private http: HttpClient) { }

    getDatosEstudiante(username: string): Observable<Estudiante> {
        const accessToken = localStorage.getItem('accessToken');
        console.log("accessToken en localStorage:", accessToken);
        const headers = new HttpHeaders({
            Authorization: `Bearer ${accessToken}`,
        });
        return this.http.get<Estudiante>(`${this.apiUrl}/datos/${username}`, { headers }); 
    }
}
