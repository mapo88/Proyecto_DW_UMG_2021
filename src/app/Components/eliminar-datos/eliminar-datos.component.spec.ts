import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDatosComponent } from './eliminar-datos.component';

describe('EliminarDatosComponent', () => {
  let component: EliminarDatosComponent;
  let fixture: ComponentFixture<EliminarDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
