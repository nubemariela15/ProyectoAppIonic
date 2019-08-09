import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {

  @Input() producto: any;
  codBarra: string;
  nombre: string;
  imagen: String;
  constructor(private navParams: NavParams, private modalController: ModalController) { 
    this.codBarra = navParams.get('producto').codBarra;
    this.nombre = navParams.get('producto').nombre;
    this.imagen = navParams.get('producto').imagen;
  }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
