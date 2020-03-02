import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyformComponent } from './applyform/applyform.component';

const routes: Routes = [ 
  
{path:'Apply Form',component: ApplyformComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
