import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MedicionesService } from 'src/app/services/mediciones/mediciones.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Medicion } from 'src/app/interfaces/medicion';
import { DispositivoService } from 'src/app/services/dispositivo.service';
import { FormatearFechaPipe } from 'src/app/pipes/formato-fecha.pipe';
import { CambiarIconoDirective } from 'src/app/directiva/cambiar-icono.directive';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule, FormatearFechaPipe, CambiarIconoDirective]
})
export class MedicionesPage implements OnInit {
  
  id: number | null = null;
  estado: number | null = null;
  medicionObject: Medicion = { fecha: '', valor: '', dispositivoId: 0 };
  medicion: any;
  data:object={};

  constructor(private _medicionService: MedicionesService, private route: ActivatedRoute, 
              private _dispositivoService: DispositivoService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      this.estado = Number(queryParams.get('estado'));
      console.log('Estado recibido:', this.estado);
    });

    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      console.log('ID recibido:', this.id);
      this.postMedicion(this.id);
    });
  }

  postMedicion (id:number) {
    this.medicionObject={
      fecha: new Date().toISOString().slice(0, 19).replace('T', ' '),
      valor: this.generarRandom().toString(),
      dispositivoId: id,
    }

    this.medicion= this._medicionService.postMedicion(this.medicionObject).
      then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
    })
  } 

  cambiarEstado(){
    if (this.estado==0){
      this.estado=1;
    }else{
      this.estado=0;   
    }

    this.data={
      id:this.id,
      estado:this.estado
    }

    this._dispositivoService.putEstadoDispositivo(this.data).
    then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  //genera numero aleatorio de 80 a 50
  generarRandom(): number {
    return Math.floor(Math.random() * (80 - 50 + 1)) + 50;
  }
}


/* getMedicion (id:number) {
  this.medicion= this._medicionService.getMedicion(id).
    then((data) => {
    this.medicion = data
    console.log(this.medicion)
  })
  .catch((error) => {
    console.log(error)
  })
} */