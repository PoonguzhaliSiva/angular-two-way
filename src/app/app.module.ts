import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HelloComponent, HiComponent, TestComponent } from './hello.component';
import { routes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,HelloComponent,HiComponent,TestComponent,
   
  ],
  imports: [
    BrowserModule,
    
   
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
