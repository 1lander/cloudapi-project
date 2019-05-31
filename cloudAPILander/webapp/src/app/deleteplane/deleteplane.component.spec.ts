import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteplaneComponent } from './deleteplane.component';

describe('DeleteplaneComponent', () => {
  let component: DeleteplaneComponent;
  let fixture: ComponentFixture<DeleteplaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteplaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
