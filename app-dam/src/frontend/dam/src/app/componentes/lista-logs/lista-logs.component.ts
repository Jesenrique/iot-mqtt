import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Medicion } from 'src/app/interfaces/medicion';
import { MedicionesService } from 'src/app/services/mediciones/mediciones.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-logs',
  templateUrl: './lista-logs.component.html',
  styleUrls: ['./lista-logs.component.scss'],
  standalone: true,
  imports:[IonicModule, IonicModule, CommonModule, FormsModule]
})
export class ListaLogsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
