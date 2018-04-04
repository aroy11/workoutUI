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
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/services/api.service';
import { WorkoutService } from './shared/services/workout.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddworkoutComponent,
    EditworkoutComponent,
    EndworkoutComponent,
    HomeComponent,
    StartworkoutComponent, TrackworkoutComponent, AddcategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,
              BrowserModule,
              AppRoutingModule,
              ApiService,
              WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
