import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecuperarPComponent } from './components/recuperar-p/recuperar-p.component';

const routes: Routes = [ 
  {path: '', redirectTo: 'login', pathMatch: 'full'},
{ path: 'login', component: LoginComponent},
{path: 'registrar-usuario', component: RegistrarUsuarioComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'recuperar-p', component: RecuperarPComponent},
{path: '**', redirectTo: 'login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
