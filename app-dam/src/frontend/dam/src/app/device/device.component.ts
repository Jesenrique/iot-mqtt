import { Component, input, OnInit, Input} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CambiarIconoDirective } from '../directiva/cambiar-icono.directive';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
  imports:[ IonicModule, CommonModule, RouterModule, CambiarIconoDirective],
  standalone: true,
}) 

export class DeviceComponent  implements OnInit {

  @Input()
  dispositivo: any;

  constructor() { }

  ngOnInit() {}

}
