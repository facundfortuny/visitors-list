import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorComponent } from './visitor.component';
import { FormBuilder } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('VisitorComponent', () => {
  let component: VisitorComponent;
  let fixture: ComponentFixture<VisitorComponent>;
  const visitor = {
    name: 'John Snow',
    email: 'johnsnow@got.com'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorComponent],
      providers: [FormBuilder],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorComponent);
    component = fixture.componentInstance;
    component.visitor = visitor;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Edit Mode', () => {
    it('should be in edit Mode', () => {
      expect(component.editMode).toBeTruthy();
    });

    it('should have an input name', () => {
      expect(fixture.nativeElement.querySelector('#inputName')).not.toBe(null);
    });

    it('should have an input email', () => {
      expect(fixture.nativeElement.querySelector('#inputEmail')).not.toBe(null);
    });

    it('should not have an text name', () => {
      expect(fixture.nativeElement.querySelector('#name')).toBe(null);
    });

    it('should have an text email', () => {
      expect(fixture.nativeElement.querySelector('#email')).toBe(null);
    });
  });

  describe('Display Mode', () => {
    beforeEach(() => {
      component.editMode = false;
      fixture.detectChanges();
    });

    it('should be in edit Mode', () => {
      expect(component.editMode).toBeFalsy();
    });

    it('should have an input name', () => {
      expect(fixture.nativeElement.querySelector('#inputName')).toBe(null);
    });

    it('should have an input email', () => {
      expect(fixture.nativeElement.querySelector('#inputEmail')).toBe(null);
    });

    it('should not have an text name', () => {
      expect(fixture.nativeElement.querySelector('#name')).not.toBe(null);
    });

    it('should have an text email', () => {
      expect(fixture.nativeElement.querySelector('#email')).not.toBe(null);
    });

    it('should change to edit mode when clicking box', () => {
      const box = fixture.debugElement.query(By.css('.box')).nativeElement;

      box.click();
      fixture.detectChanges();

      expect(component.editMode).toBeTruthy();
      expect(fixture.nativeElement.querySelector('#inputName')).not.toBe(null);
      expect(fixture.nativeElement.querySelector('#email')).toBe(null);
    });
  });
});
