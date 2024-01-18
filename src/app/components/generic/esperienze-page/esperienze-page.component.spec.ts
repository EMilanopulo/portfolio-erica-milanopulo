import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsperienzePageComponent } from './esperienze-page.component';

describe('EsperienzePageComponent', () => {
  let component: EsperienzePageComponent;
  let fixture: ComponentFixture<EsperienzePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsperienzePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsperienzePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
