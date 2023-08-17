import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageprofComponent } from './pageprof/pageprof.component';
import { StageService } from './stage.service';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PageetudComponent } from './pageetud/pageetud.component';
import { PageadminComponent } from './pageadmin/pageadmin.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageprofComponent,
    PageetudComponent,
    PageadminComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

    


  ],
  providers: [StageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
