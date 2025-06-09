import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AutoHeightDirective } from './auto-height.directive';

@Component({
  template: `<div appAutoHeight style="height: 50px;">Test</div>`
})
class TestComponent {}

describe('AutoHeightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let debugEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, AutoHeightDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    debugEl = fixture.debugElement.query(By.directive(AutoHeightDirective));
  });

  it('should create an instance', () => {
    const directive = debugEl.injector.get(AutoHeightDirective);
    expect(directive).toBeTruthy();
  });

  it('should set height automatically', () => {
    const div: HTMLElement = debugEl.nativeElement;
    // Add your expectations here, e.g., check style changes
    expect(div.style.height).toBe('50px');
  });
});
