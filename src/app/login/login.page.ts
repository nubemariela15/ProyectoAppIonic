import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, ModalController } from '@ionic/angular';
import { UserServiceProvider } from 'src/providers/user-service';
import { HttpClient } from '@angular/common/http';
import { PrincipalPage} from '../principal/principal.page';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
//import { ConsoleReporter } from 'jasmine';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
  usuario:any;
  email:string
  clave:string;
  // ip:string = "192.168.1.12:8080";
  ip:string = "localhost:8080";
  dat:String;
  constructor(public navCtrl: NavController, public router:Router, public http: HttpClient, private alertController: AlertController ) { }

  ngOnInit() {

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error!',
      message: 'Credenciales incorrectas',
      buttons: ['OK']
    });

    await alert.present();
  }

  public login() {
    // return new Promise(resolve => {
    //   this.http.get('http://'+this.ip+'/SistemaSupermercado/srv/cliente/log?un='+this.email+'&pass='+this.clave).subscribe(data => {
    //     //resolve(data);
    //       //this.usuario=data+"";
    //       if(this.usuario!="true"){
    //         console.log("llego");
    //       this.router.navigate(['/principal']);
    //     }else{
    //       console.log("error");
    //     }
    //   }, err => {
    //     console.log(err);
    //   });
    // });
    return new Promise(resolve => {
      this.http.get('http://'+this.ip+'/SistemaSupermercado/srv/cliente/log?un='+this.email+'&pass='+this.clave).subscribe(data => {
        if (data === null) {
          this.presentAlert();
        } else {
          this.router.navigate(['/principal']);
        }
      }, () => {
        this.presentAlert();
      });
    });
  } 


}

  

 

