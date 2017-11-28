import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {FormsModule} from "@angular/forms";
import {APPROUTES} from './app.routes';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import {EthereumService} from './services/ethereum.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APPROUTES),
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [EthereumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
