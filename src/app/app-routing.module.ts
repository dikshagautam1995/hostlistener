import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostlistenerComponent } from './components/hostlistener/hostlistener.component';

const routes: Routes = [
  {path: '', component: HostlistenerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
