import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3Listcard2Component } from './baitap3-listcard2.component';

describe('Baitap3Listcard2Component', () => {
  let component: Baitap3Listcard2Component;
  let fixture: ComponentFixture<Baitap3Listcard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap3Listcard2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3Listcard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
