import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input() chair:any;
  @Output() eventBooking = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

 datGhe(){
   this.chair.TrangThai =!this.chair.TrangThai
  this.eventBooking.emit(this.chair)    
  } 
}
