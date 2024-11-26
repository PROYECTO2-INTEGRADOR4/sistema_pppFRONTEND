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
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, SidebarModule, CommonModule, RouterModule, RippleModule, AvatarModule, StyleClassModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  visible: boolean = true;
  accesos: any[] = []; 
  roles: string[] = [];
  token: string = '';

  constructor(private accesoService: AccesoService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    console.log('Token:', token);

  if (token) {
    this.accesoService.obtenerAccesosPorRol(1).subscribe( 
      (response) => {
        
        console.log('Accesos cargados:', response);
        this.accesos = response;
      },
      (error) => {
        console.error('Error al cargar accesos:', error);
      }
    );
  } else {
    console.warn('Token no encontrado en localStorage');
  }
  
  }
}