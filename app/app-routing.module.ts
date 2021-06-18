import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
// import { AboutComponent } from './home-template/about/about.component';
// import { HomeTemplateComponent } from './home-template/home-template.component';
import { HomeTemplateModule } from './home-template/home-template.module';
// import { HomeComponent } from './home-template/home/home.component';
// import { ListMovieComponent } from './interaction/list-movie/list-movie.component';

const routes: Routes = [
  //localhost:4200
  // {
  //   path:'',
  //   component: HomeTemplateComponent,
  //   children:[
  //     //home
  //     {
  //       path:"",
  //       component:HomeComponent
  //     },
  //     //about
  //     {
  //       path:"about",
  //       component: AboutComponent,
  //     },
  //     //list-movie
  //     {
  //       path:"list-movie",
  //       component: ListMovieComponent
  //     },

  //   ]
  // },
  {
    path:"",
    loadChildren: ()=>HomeTemplateModule,
  },
  
  //localhost:4200/admin
  {
    path:'admin',
    component: AdminTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
