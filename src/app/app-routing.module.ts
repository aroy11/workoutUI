import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule , Routes} from '@angular/router';
import { AddworkoutComponent } from './addworkout/addworkout.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { TrackworkoutComponent } from './trackworkout/trackworkout.component';
import { EditworkoutComponent } from './editworkout/editworkout.component';
import { HomeComponent } from './home/home.component';

const workoutRoutes : Routes = [
  {path:'', redirectTo:'/home' , pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'addworkout', component:AddworkoutComponent},
  {path:'addcategory', component:AddcategoryComponent},
  {path:'trackworkout', component:TrackworkoutComponent},
  {path:'editworkout',component:EditworkoutComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(workoutRoutes)
  ],
  declarations: [],
  exports : [RouterModule]
})
export class AppRoutingModule { }
