import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { EstudianteService } from '../../service/estudiante.service';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-solicitud-inicio',
  standalone: true,
  imports: [SidebarComponent, FileUploadModule, ToastModule, CommonModule],
  templateUrl: './solicitud-inicio.component.html',
  providers: [MessageService],
  styleUrl: './solicitud-inicio.component.css'
})
export class SolicitudInicioComponent implements OnInit{
  estudianteData: any = {};
  username: string | null = '';
  loading: boolean = true;
  uploadedFiles: any[] = [];


  constructor(
    private estudianteService : EstudianteService,
    private messageService: MessageService
  ) {}

  onUpload(event: any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    if (this.username) {
      this.estudianteService.getDatosEstudiante(this.username).subscribe(
        (response) => {
          console.log('Datos del perfil:', response);
          this.estudianteData = response;
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

