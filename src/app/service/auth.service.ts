import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const loginDto = { username, password };
    return this.http.post(`${this.baseUrl}/login`, loginDto);
  }

  saveSessionData(accessToken: string, roles: string[], carrera: string, username: string): void {
    console.log("Guardando accessToken:", accessToken);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('username', username);
    localStorage.setItem('carrera', carrera);
    localStorage.setItem('roles', JSON.stringify(roles));  // Guardar roles como JSON 
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  getRoles(): string[] {
    const roles = localStorage.getItem('roles');
    return roles ? JSON.parse(roles) : [];
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  getCarrera(): string | null {
    return localStorage.getItem('carrera');
  }

  isLoggedIn(): boolean {
    const accessToken = this.getToken();
    return accessToken !== null;
  }

  logout(): void {
    localStorage.clear();  // Elimina todos los datos guardados en localStorage
  }
}
