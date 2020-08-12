import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  // { path: 'start', component: StartComponent },
  { path: 'main', component: MainComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
