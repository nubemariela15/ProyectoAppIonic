import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DetalleProductoPage } from '../detalle-producto/detalle-producto.page';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  producto:Observable<any>;
  codigo:number;
  id:number;
  prod
  constructor(public http:HttpClient, public router: Router, public route: ActivatedRoute, private modalController: ModalController) {
    console.log(this.route.snapshot.paramMap.get('id'))
    this.consultarDatos();
  
   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)

  }

  public consultarDatos(){
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/SistemaSupermercado/srv/cliente/ImagenProducto?cod='+this.id).subscribe(data => {
        resolve(data);
          console.log(data)
      }, err => {
        console.log(err);
      });
    });
  }

 /*  public consultarDatos(id){
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/SistemaSupermercado/srv/cliente/ImagenProducto?cod='+this.codigo).subscribe(data => {
        resolve(data);
          this.router.navigate(['/producto']);
      }, err => {
        console.log(err);
      });
    });
  } */

  

    
    

  



}
