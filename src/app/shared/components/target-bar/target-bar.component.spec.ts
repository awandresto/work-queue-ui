import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetBarComponent } from './target-bar.component';

describe('TargetBarComponent', () => {
  let component: TargetBarComponent;
  let fixture: ComponentFixture<TargetBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
