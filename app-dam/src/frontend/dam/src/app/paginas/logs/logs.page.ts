import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ListaLogsComponent } from 'src/app/componentes/lista-logs/lista-logs.component';
import { IonicModule } from '@ionic/angular';
import { Medicion } from 'src/app/interfaces/medicion';
import { MedicionesService } from 'src/app/services/mediciones/mediciones.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormatearFechaPipe } from 'src/app/pipes/formato-fecha.pipe';


@Component({
  selector: 'app-logs',
  templateUrl: './logs.page.html',
  styleUrls: ['./logs.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, FormatearFechaPipe
  ]
})
export class LogsPage implements OnInit {


  mediciones:Medicion[]|null = null;
  id:number|null = null;

  constructor(private _serviceMediciones:MedicionesService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      console.log(this.id)
      this.getMediciones(this.id);
    });
  }

  getMediciones(id:number){
    this._serviceMediciones.getMediciones(id)
    .then((data: Medicion[]) => {
      this.mediciones = data
      console.log(this.mediciones)
    })
    .catch((error) => {
      console.log(error)
    })
  }

}
