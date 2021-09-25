import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarDatosComponent } from './visualizar-datos.component';

describe('VisualizarDatosComponent', () => {
  let component: VisualizarDatosComponent;
  let fixture: ComponentFixture<VisualizarDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
