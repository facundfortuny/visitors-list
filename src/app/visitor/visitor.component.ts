import { Component, OnInit, Input } from '@angular/core';
import { Visitor } from '../shared/models/visitor.model';
import { faUser, faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss'],
})
export class VisitorComponent implements OnInit {
  @Input() visitor: Visitor;

  iconFaUser = faUser;
  iconFaAt = faAt;

  constructor() {}

  ngOnInit(): void {}
}
