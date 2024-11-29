import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { AccesoService } from '../../service/acceso.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { error } from 'console';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, SidebarModule, CommonModule, RippleModule, RouterLink, AvatarModule, StyleClassModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  visible: boolean = true;
  accesos: any[] = [];
  roles: string[] = [];
  accessToken: string = '';
  sidebarVisible: boolean = false;

  closeCallback(event: any): void {
    console.log("Botón clickeado:", event); // Muestra información del evento
    this.sidebarVisible = false;  // Cambia la visibilidad del sidebar a 'false' (lo cierra)
  }

  constructor(private accesoService: AccesoService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    const accessToken = localStorage.getItem('accessToken');
    console.log('accessToken:', accessToken);

    if (accessToken) {
      const roles = localStorage.getItem('roles');
      if (roles) {
        const nombreRol = JSON.parse(roles)[0];
        console.log('Rol:', nombreRol);

        this.accesoService.obtenerAccesosPorRol(nombreRol).subscribe(
          (response) => {
            console.log('Accesos:', response);
            this.accesos = response;
          },
          (error) => {
            console.error('Error al cargar:', error);
          }
        );
      } else {
        console.warn('No se encontraron roles en localStorage');
      }

    } else {
      console.warn('accessToken no encontrado en localStorage');
    }
  }
  
  logout(): void {
    this.authService.logout();  // Elimina el token de localStorage
    this.router.navigate(['/login']);  // Redirige al usuario a la página de login
  }
}