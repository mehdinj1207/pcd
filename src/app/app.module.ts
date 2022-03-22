import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './sharepages/header/header.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { from } from 'rxjs';
import { CoursesComponent } from './pages/courses/courses.component';
import { ThirdofComponent } from './pages/thirdof/thirdof.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent,
    AboutComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,
    ThirdofComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
