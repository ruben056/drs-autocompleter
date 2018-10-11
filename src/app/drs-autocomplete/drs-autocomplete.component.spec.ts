import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrsAutocompleteComponent } from './drs-autocomplete.component';

describe('DrsAutocompleteComponent', () => {
  let component: DrsAutocompleteComponent;
  let fixture: ComponentFixture<DrsAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrsAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrsAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
