import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttestimonialsComponent } from './testtestimonials.component';

describe('TesttestimonialsComponent', () => {
  let component: TesttestimonialsComponent;
  let fixture: ComponentFixture<TesttestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesttestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesttestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
