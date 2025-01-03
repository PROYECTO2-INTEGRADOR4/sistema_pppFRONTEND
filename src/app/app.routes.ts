import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { SolicitudInicioComponent } from './componentes/solicitud-inicio/solicitud-inicio.component';
import { GestorPComponent } from './componentes/gestor-p/gestor-p.component';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { GraficoComponent } from './componentes/grafico/grafico.component';
import { Auth2Guard } from './auth2.guard';
import { HomeComponent } from './componentes/home/home.component';
import { GestionInicioComponent } from './componentes/gestion-inicio/gestion-inicio.component';

export const routes: Routes = [
    {
        path : 'login',
        component : LoginComponent,
        canActivate: [Auth2Guard]
    },
    {
        path : 'home',
        component: HomeComponent,
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
    },
    {
        path: 'g_carrera',
        component: GraficoComponent,
        title: 'usuario por carrera',
        canActivate: [AuthGuard]
    },
    {
        path: 'gestion_practicas',
        component: GestionInicioComponent,
        title: 'gestion_inicio',
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],  // Configura las rutas
    exports: [RouterModule]  // Exporta el RouterModule para usar las rutas en otros componentes
})
export class AppRoutingModule {}
