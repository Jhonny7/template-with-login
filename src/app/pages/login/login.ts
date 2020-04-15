import { AlertaService } from './../../services/alerta.service';
import { LoadingService } from './../../services/loading.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public configuraciones: any = {
    visible: false
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingService: LoadingService,
    private alertaSErvice: AlertaService) {

      this.loadingService.show();  
      //comentario
  }

  ionViewDidLoad() {
    //console.log("fghjk");

    //this.loadingService.show();
    this.alertaSErvice.alertaBasica("a","b",null);
  }

  visible(){
    this.configuraciones.visible = !this.configuraciones.visible;
  }

}
