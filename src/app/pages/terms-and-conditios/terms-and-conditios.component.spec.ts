import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndConditiosComponent } from './terms-and-conditios.component';

describe('TermsAndConditiosComponent', () => {
  let component: TermsAndConditiosComponent;
  let fixture: ComponentFixture<TermsAndConditiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsAndConditiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsAndConditiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
