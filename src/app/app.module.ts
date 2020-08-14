import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { StartComponent } from './start/start.component';
import { HeaderComponentrComponent } from './heade-componentr/heade-componentr.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SelectorComponent } from './selector/selector.component';
import { FormsModule } from '@angular/forms';
import { ConnectorComponent } from './connector/connector.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    StartComponent,
    HeaderComponentrComponent,
    ButtonsComponent,
    SelectorComponent,
    ConnectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
