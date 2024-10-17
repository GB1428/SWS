import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Usuario } from 'src/app/models/usuario.models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isLoggedIn: boolean = false;
  rol: string = '';
  usuarioCompleto: Usuario;
  usuario: string;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.usuarioCompleto$.subscribe(usuarioCompleto => {
      this.isLoggedIn = usuarioCompleto !== null; // Verifica si el usuario está autenticado
      if (usuarioCompleto) {
        this.rol = usuarioCompleto.rol; // Asigna el rol
      } else {
        this.rol = null; // Restablece el rol si no está logueado
      }
    });
  }
}
