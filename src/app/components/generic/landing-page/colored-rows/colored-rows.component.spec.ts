import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredRowsComponent } from './colored-rows.component';

describe('ColoredRowsComponent', () => {
  let component: ColoredRowsComponent;
  let fixture: ComponentFixture<ColoredRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoredRowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoredRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
