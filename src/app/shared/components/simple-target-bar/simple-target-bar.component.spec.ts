import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTargetBarComponent } from './simple-target-bar.component';

describe('SimpleTargetBarComponent', () => {
  let component: SimpleTargetBarComponent;
  let fixture: ComponentFixture<SimpleTargetBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleTargetBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleTargetBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
