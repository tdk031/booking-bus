import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3Card1Component } from './baitap3-card1.component';

describe('Baitap3Card1Component', () => {
  let component: Baitap3Card1Component;
  let fixture: ComponentFixture<Baitap3Card1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap3Card1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3Card1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
