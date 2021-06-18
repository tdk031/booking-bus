import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3Card2Component } from './baitap3-card2.component';

describe('Baitap3Card2Component', () => {
  let component: Baitap3Card2Component;
  let fixture: ComponentFixture<Baitap3Card2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap3Card2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3Card2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
