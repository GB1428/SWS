import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarComponent } from './registrar/registrar.component';
import { HomeComponent } from './home/home.component';
import { VistaAlumnoComponent } from './vista-alumno/vista-alumno.component';
import { VistaProfesorComponent } from './vista-profesor/vista-profesor.component';
import { LogoutComponent } from './logout/logout.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { SharedModule } from '../shared/shared.module';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [

    LoginComponent,
    RegistrarComponent,
    RecuperarComponent,
    HomeComponent,
    LogoutComponent,
    VistaAlumnoComponent,
    VistaProfesorComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    QRCodeModule
  ]
})
export class PagesModule { }
