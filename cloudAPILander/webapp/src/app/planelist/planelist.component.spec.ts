import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanelistComponent } from './planelist.component';

describe('PlanelistComponent', () => {
  let component: PlanelistComponent;
  let fixture: ComponentFixture<PlanelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
