import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiePageComponent } from './tecnologie-page.component';

describe('TecnologiePageComponent', () => {
  let component: TecnologiePageComponent;
  let fixture: ComponentFixture<TecnologiePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologiePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
