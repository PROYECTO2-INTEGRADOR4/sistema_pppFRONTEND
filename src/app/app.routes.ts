import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { SolicitudInicioComponent } from './componentes/solicitud-inicio/solicitud-inicio.component';

export const routes: Routes = [
    {
        path : 'login',
        component : LoginComponent,
        title : 'Login'
    },
    {
        path : 'home',
        component: SidebarComponent,
        title : 'Home'
    },
    {
        path : '',
        redirectTo : 'login',
        pathMatch: 'full'
    },
    {
        path : 'perfil',
        component : PerfilComponent,
        title : 'perfil' 
    },
    {
        path : 'inicio_practicas',
        component : SolicitudInicioComponent,
        title : 'solicitud' 
    },
    
];
