import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-profesor',
  templateUrl: './vista-profesor.component.html',
  styleUrls: ['./vista-profesor.component.scss'],
})
export class VistaProfesorComponent  implements OnInit {
qrCodeString: string | null = null;
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit llamado');
  }
  generarQr() {
    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    this.qrCodeString = randomString;
  }

}
