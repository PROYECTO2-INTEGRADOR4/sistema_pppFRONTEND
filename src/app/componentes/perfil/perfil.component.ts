import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { PerfilService } from '../../service/perfil.service';
import { AuthService } from '../../service/auth.service';
import { response, Router } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
  perfilData: any = {};
  username: string | null = '';
  loading: boolean = true;

  constructor(
    private perfilService: PerfilService,
  ) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    if (this.username) {
      this.perfilService.getPerfilData(this.username).subscribe(
        (response) => {
          console.log('Datos del perfil:', response);
          this.perfilData = response;
          this.loading = false;
        },
        (error) => {
          console.error('Error al cargar datos:', error);
          this.loading = false;
        }
      )
    } else {
      console.warn('No se encontró el username en localStorage');
    }
  }
}
