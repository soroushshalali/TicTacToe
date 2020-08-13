import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { StartComponent } from './start/start.component';
import { SelectorComponent } from './selector/selector.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'main', component: MainComponentComponent },
  {path:'selector' , component:SelectorComponent},
  { path: '', redirectTo: '/start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
