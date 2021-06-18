import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap3Component } from './baitap3.component';
import { Baitap3HeaderComponent } from './baitap3-header/baitap3-header.component';
import { Baitap3CarouselComponent } from './baitap3-carousel/baitap3-carousel.component';
import { Baitap3Listcard1Component } from './baitap3-listcard1/baitap3-listcard1.component';
import { Baitap3Listcard2Component } from './baitap3-listcard2/baitap3-listcard2.component';
import { Baitap3Card1Component } from './baitap3-card1/baitap3-card1.component';
import { Baitap3Card2Component } from './baitap3-card2/baitap3-card2.component';
import { Baitap3FooterComponent } from './baitap3-footer/baitap3-footer.component';



@NgModule({
  declarations: [
    Baitap3Component,
    Baitap3HeaderComponent,
    Baitap3CarouselComponent,
    Baitap3Listcard1Component,
    Baitap3Listcard2Component,
    Baitap3Card1Component,
    Baitap3Card2Component,
    Baitap3FooterComponent
  ],
  exports:[Baitap3Component],
  imports: [
    CommonModule
  ]
})
export class Baitap3Module { }
