import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header.component';
import { FooterComponent } from './shared/layout/footer.component';
import { AddworkoutComponent } from './addworkout/addworkout.component';
import { EditworkoutComponent } from './editworkout/editworkout.component';
import { EndworkoutComponent } from './endworkout/endworkout.component';
import { HomeComponent } from './home/home.component';
import { StartworkoutComponent } from './startworkout/startworkout.component';
import { TrackworkoutComponent } from './trackworkout/trackworkout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddworkoutComponent,
    EditworkoutComponent,
    EndworkoutComponent,
    HomeComponent,    
    StartworkoutComponent, TrackworkoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }