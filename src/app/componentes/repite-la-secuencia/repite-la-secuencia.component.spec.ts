import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepiteLaSecuenciaComponent } from './repite-la-secuencia.component';

describe('RepiteLaSecuenciaComponent', () => {
  let component: RepiteLaSecuenciaComponent;
  let fixture: ComponentFixture<RepiteLaSecuenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepiteLaSecuenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepiteLaSecuenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
