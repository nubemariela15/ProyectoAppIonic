import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.page.html',
  styleUrls: ['./factura.page.scss'],
})
export class FacturaPage implements OnInit {
  
  @Input() producto1: any;
  @Input() detalle: any;
  codBarra: string;
  nombre: string;
  cantitad: string;
  precioventa: String;
  precioTotal: string;

  public detalles : Array<Object> = [];

  constructor(navParams: NavParams,
              private modalController: ModalController, public router:Router) { 
                this.detalles=[
                  this.producto1,
                  this.codBarra = navParams.get('producto1').codBarra,
    this.nombre = navParams.get('producto1').nombre,
    this.precioventa = navParams.get('producto1').precioventa,
                  console.log(this.producto1)

                ]
    
    
    
  }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }


}
