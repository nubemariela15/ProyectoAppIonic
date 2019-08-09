import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavParams, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FacturaPage } from '../factura/factura.page';
import { DetalleProductoPage } from '../detalle-producto/detalle-producto.page';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  datos:Observable<any>;
  producto:any;
  producto1:any;
  categoria:any;
  codigo:any;
  constructor(public http: HttpClient, public router: Router, public route: ActivatedRoute, private modalController: ModalController) { 
    this.getProductos();
   
  }

  ngOnInit() {
  }

  public getProductos() {
    
     this.datos=this.http.get('http://localhost:8080/SistemaSupermercado/srv/cliente/ImagenProductos');
     return this.datos;
  }

  public verProducto(id) {
    
   
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/SistemaSupermercado/srv/cliente/ImagenProducto?cod='+id).subscribe(data => {
        resolve(data);
        this.producto=data;
        // this.router.navigate(['/producto', id]);
        this.showDetail(this.producto);
        // console.log("LLego codigo"+id)
        // console.log(data)
        // console.log(this.producto)
      }, err => {
        console.log(err);
      });
    });
  
}

async showDetail(producto: any) {
  // console.log(producto);
  const showDet = await this.modalController.create({
    component: DetalleProductoPage,
    componentProps: {
      producto
    }
  });
  await showDet.present();
}

public enviarProducto(id) {
   
  return new Promise(resolve => {
    this.http.get('http://localhost:8080/SistemaSupermercado/srv/cliente/ImagenProducto?cod='+id).subscribe(data => {
      resolve(data);
      this.producto1=data;
      // this.router.navigate(['/producto', id]);
      this.showProducto(this.producto1);
      // console.log("LLego codigo"+id)
      // console.log(data)
      // console.log(this.producto)
    }, err => {
      console.log(err);
    });
  });

}


async showProducto(producto1: any) {
  // console.log(producto);
  const showDet = await this.modalController.create({
    component: FacturaPage,
    componentProps: {
      producto1
    }
  });
  await showDet.present();
}

public buscarProducto(id) {
   
  return new Promise(resolve => {
    this.http.get('http://localhost:8080/SistemaSupermercado/srv/cliente/ImagenProductoCat?cod='+id).subscribe(data => {
      resolve(data);
      this.categoria=data;
      // this.router.navigate(['/producto', id]);
      this.showCategoria(this.categoria);
      // console.log("LLego codigo"+id)
      // console.log(data)
      // console.log(this.producto)
    }, err => {
      console.log(err);
    });
  });

}


async showCategoria(categoria: any) {
  // console.log(producto);
  const showDet = await this.modalController.create({
    component: PrincipalPage,
    componentProps: {
      categoria
    }
  });
  await showDet.present();
}

		
	}
 


