import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchAirlinedataComponent } from './fetch-airlinedata.component';

describe('FetchAirlinedataComponent', () => {
  let component: FetchAirlinedataComponent;
  let fixture: ComponentFixture<FetchAirlinedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchAirlinedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchAirlinedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
