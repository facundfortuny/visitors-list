import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';

import {
  faUser,
  faAt,
  faCheck,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

import { Visitor } from '../shared/models/visitor.model';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss'],
})
export class VisitorComponent implements OnInit {
  @Input() visitor: Visitor;
  @Output() closeVisitor: EventEmitter<Visitor> = new EventEmitter<Visitor>();
  editMode = true;
  visitorForm: FormGroup;

  iconUser = faUser;
  iconAt = faAt;
  iconCheck = faCheck;
  iconExcl = faExclamationTriangle;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.visitorForm = this.createForm(this.visitor);
  }

  createForm(visitor) {
    return this.formBuilder.group({
      name: [visitor.name, [Validators.required]],
      email: [
        visitor.email,
        [
          Validators.required,
          Validators.pattern(
            /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
          ),
        ],
      ],
    });
  }

  isValidInput(input: AbstractControl): boolean {
    return input.valid && input.touched;
  }

  isInvalidInput(input: AbstractControl): boolean {
    return input.invalid && input.touched;
  }

  submitForm(): void {
    if (this.visitorForm.valid) {
      this.editMode = false;
      this.visitor = this.visitorForm.value;
      this.closeVisitor.emit(this.visitor);
    }
  }

  cancel() {
    this.closeVisitor.emit(this.visitor);
  }

  changeEditMode() {
    this.editMode = true;
  }
}
