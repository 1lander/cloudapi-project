import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplaneComponent } from './addplane.component';

describe('AddplaneComponent', () => {
  let component: AddplaneComponent;
  let fixture: ComponentFixture<AddplaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddplaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
