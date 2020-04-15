import { NgModule, ErrorHandler } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar'; 
import { IonicErrorHandler } from 'ionic-angular';
import { AlertaService } from './services/alerta.service';
import { LoadingService } from './services/loading.service';


@NgModule({
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        AlertaService,
        LoadingService
    ]
})
export class ProvidersModule { }