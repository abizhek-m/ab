import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';   
import { ParticipateComponent } from './participate/participate.component';
import { EndComponent } from './end/end.component';
import { HireComponent } from './hire/hire.component';
import { WhiteComponent } from './white/white.component';
import { BlackComponent } from './black/black.component';

const routes: Routes = [
  {path:'Participate',component:ParticipateComponent},
  {path:'End',component:EndComponent},
  {path:'Hire',component:HireComponent},
  {path:'White',component:WhiteComponent},
  {path:'Black',component:BlackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
