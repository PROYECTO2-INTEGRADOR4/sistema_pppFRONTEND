import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";


@Component({
  selector: 'app-solicitud-inicio',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './solicitud-inicio.component.html',
  styleUrl: './solicitud-inicio.component.css'
})
export class SolicitudInicioComponent {

}
