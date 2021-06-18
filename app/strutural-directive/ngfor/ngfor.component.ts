import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {
  dssv:any =[
    {ten:'Tuan' , tuoi: 16},
    {ten:'Nhan' , tuoi: 21},
    {ten:'Nguyen' , tuoi: 31},
    {ten:'Phu' , tuoi: 22}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
