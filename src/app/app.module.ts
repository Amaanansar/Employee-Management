import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { GetDataComponent } from './MyComponent/get-data/get-data.component';
import { SetDataComponent } from './MyComponent/set-data/set-data.component';
import { UpdateFormComponent } from './MyComponent/update-form/update-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GetDataComponent,
    SetDataComponent,
    UpdateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
