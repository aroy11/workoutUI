import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackworkoutComponent } from './trackworkout.component';

describe('TrackworkoutComponent', () => {
  let component: TrackworkoutComponent;
  let fixture: ComponentFixture<TrackworkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackworkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackworkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
