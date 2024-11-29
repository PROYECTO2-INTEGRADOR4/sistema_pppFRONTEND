import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Persona, PersonaService } from '../../service/persona.service';

@Component({
  selector: 'app-gestor-p',
  standalone: true,
  imports: [SidebarComponent, TableModule, CommonModule],
  templateUrl: './gestor-p.component.html',
  styleUrl: './gestor-p.component.css'
})
export class GestorPComponent implements OnInit {
  personas!: Persona[];

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.cargarPersonas();
  }

  cargarPersonas() {
    this.personaService.getAllPersonas().subscribe({
      next: (data) => {
        this.personas = data;
        console.log('Personas cargadas:', data);
      },
      error: (err) => {
        console.error('Error al cargar personas:', err);
      },
    });
  }
}
