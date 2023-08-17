import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { PageadminComponent } from './pageadmin/pageadmin.component';
import { PageprofComponent } from './pageprof/pageprof.component';
import { PageetudComponent } from './pageetud/pageetud.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'pageadmin' , component: PageadminComponent},
  {path: 'pageprof' , component: PageprofComponent},
  {path: 'pageetud' , component: PageetudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
