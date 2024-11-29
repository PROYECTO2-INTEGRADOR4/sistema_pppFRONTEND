import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { SolicitudInicioComponent } from './componentes/solicitud-inicio/solicitud-inicio.component';
import { GestorPComponent } from './componentes/gestor-p/gestor-p.component';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path : 'login',
        component : LoginComponent,
    },
    {
        path : 'home',
        component: SidebarComponent,
        title : 'Home',
        canActivate: [AuthGuard]
    },
    {
        path : '',
        redirectTo : 'login',
        pathMatch: 'full'
    },
    {
        path : 'perfil',
        component : PerfilComponent,
        title : 'perfil',
        canActivate: [AuthGuard]
    },
    {
        path : 'inicio_practicas',
        component : SolicitudInicioComponent,
        title : 'solicitud', 
        canActivate: [AuthGuard]
    },
    {
        path : 'personas_r',
        component : GestorPComponent,
        title : 'gestorp' ,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],  // Configura las rutas
    exports: [RouterModule]  // Exporta el RouterModule para usar las rutas en otros componentes
})
export class AppRoutingModule {}
