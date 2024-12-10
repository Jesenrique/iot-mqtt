import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../services/dispositivo.service';
import { DeviceComponent } from '../device/device.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-dispositivos',
  templateUrl: './listado-dispositivos.component.html',
  styleUrls: ['./listado-dispositivos.component.scss'],
  standalone: true,
  imports: [IonicModule, DeviceComponent, CommonModule, FormsModule]
})
export class ListadoDispositivosComponent  implements OnInit {

  dispositivos: any = []
  constructor(private _dispositivoService: DispositivoService) { }

  ngOnInit() {
    this._dispositivoService.getDispositivos()
    .then((data) => {
      this.dispositivos = data
      console.log(this.dispositivos)
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
