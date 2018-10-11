import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandSelectieMlComponent } from './land-selectie-ml.component';

describe('LandSelectieMlComponent', () => {
  let component: LandSelectieMlComponent;
  let fixture: ComponentFixture<LandSelectieMlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandSelectieMlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandSelectieMlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
