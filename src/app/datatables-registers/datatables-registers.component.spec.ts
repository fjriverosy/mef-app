import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablesRegistersComponent } from './datatables-registers.component';

describe('DatatablesRegistersComponent', () => {
  let component: DatatablesRegistersComponent;
  let fixture: ComponentFixture<DatatablesRegistersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatablesRegistersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablesRegistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
