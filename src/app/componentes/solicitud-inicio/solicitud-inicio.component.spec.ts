import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudInicioComponent } from './solicitud-inicio.component';

describe('SolicitudInicioComponent', () => {
  let component: SolicitudInicioComponent;
  let fixture: ComponentFixture<SolicitudInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
