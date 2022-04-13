import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstIntroductionComponent } from './first-introduction.component';

describe('FirstIntroductionComponent', () => {
  let component: FirstIntroductionComponent;
  let fixture: ComponentFixture<FirstIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstIntroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
