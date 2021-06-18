import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StruturalDirectiveComponent } from './strutural-directive.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';



@NgModule({
  declarations: [
    StruturalDirectiveComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent
  ],
  exports:[StruturalDirectiveComponent],
  imports: [
    CommonModule
  ]
})
export class StruturalDirectiveModule { }
