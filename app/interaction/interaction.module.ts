import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { ItemMovieComponent } from './item-movie/item-movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';



@NgModule({
  declarations: [
    InteractionComponent,
    ItemMovieComponent,
    ListMovieComponent
  ],
  exports: [
    InteractionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InteractionModule { }
