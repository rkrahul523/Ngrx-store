import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { YearWiseComponent } from './year-wise/year-wise.component';

const routes: Routes = [
//   { path: '', component: ViewComponent
// },

{
  path:'home',
  component: HomeComponent
},
{
  path:'year',
  component: YearWiseComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }