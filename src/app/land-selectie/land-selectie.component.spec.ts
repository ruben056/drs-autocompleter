import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandSelectieComponent } from './land-selectie.component';

describe('LandSelectieComponent', () => {
  let component: LandSelectieComponent;
  let fixture: ComponentFixture<LandSelectieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandSelectieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandSelectieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
