import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupEnvComponent } from './setup-env/setup-env.component';

const routes: Routes = [

  { path: '', redirectTo: 'beforelogin', pathMatch: 'full' },  
  { path: 'beforelogin', component: SetupEnvComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
