import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-gestion-inicio',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './gestion-inicio.component.html',
  styleUrl: './gestion-inicio.component.css'
})
export class GestionInicioComponent {

}
