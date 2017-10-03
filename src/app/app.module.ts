import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterListComponent } from './public/register-list/register-list.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { BodyComponent } from './common/body/body.component';
import { LoaderComponent } from './common/loader/loader.component';
import { RegisterListService } from './public/register-list/services/register-list.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterListComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [RegisterListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
