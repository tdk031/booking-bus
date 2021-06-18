import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3Listcard1Component } from './baitap3-listcard1.component';

describe('Baitap3Listcard1Component', () => {
  let component: Baitap3Listcard1Component;
  let fixture: ComponentFixture<Baitap3Listcard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap3Listcard1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3Listcard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
