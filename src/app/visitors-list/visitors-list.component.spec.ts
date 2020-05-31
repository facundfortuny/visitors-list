import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsListComponent } from './visitors-list.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('VisitorsListComponent', () => {
  let component: VisitorsListComponent;
  let fixture: ComponentFixture<VisitorsListComponent>;
  let newVisitorButton: HTMLButtonElement;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorsListComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorsListComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    newVisitorButton = fixture.debugElement.query(By.css('button')).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button with text `New Visitor`', () => {
    expect(newVisitorButton.textContent).toContain('New Visitor');
  });

  it('should create a new visitor when click', () => {
    newVisitorButton.click();
    fixture.detectChanges();
    const appVisitors = element.querySelectorAll('app-visitor');
    expect(appVisitors.length).toBe(1);
  });

  it('should disable the button when a visitor is been create', () => {
    let appVisitors = element.querySelectorAll('app-visitor');
    expect(appVisitors.length).toBe(0);

    newVisitorButton.click();
    fixture.detectChanges();

    appVisitors = element.querySelectorAll('app-visitor');
    expect(appVisitors.length).toBe(1);

    newVisitorButton.click();
    fixture.detectChanges();

    appVisitors = element.querySelectorAll('app-visitor');
    expect(appVisitors.length).toBe(1);
  });
});
