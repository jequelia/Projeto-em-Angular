import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { HomeComponent } from './paginas/home/home.component';

const routes: Routes = [

  {path:'', redirectTo:"login", pathMatch:"full"},
  {path:'login', component: LoginComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'home', component: HomeComponent},
  {path:'**', redirectTo:'login', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
