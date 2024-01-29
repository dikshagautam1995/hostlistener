import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostlistenerComponent } from './components/hostlistener/hostlistener.component';
import { HostDirective } from './directives/host.directive';

@NgModule({
  declarations: [
    AppComponent,
    HostlistenerComponent,
    HostDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
