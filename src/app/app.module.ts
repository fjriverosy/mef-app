import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterListComponent } from './public/register-list/register-list.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { BodyComponent } from './common/body/body.component';
import { LoaderComponent } from './common/loader/loader.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
