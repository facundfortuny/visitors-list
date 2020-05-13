import { Component, OnInit, Input } from '@angular/core';
import { Visitor } from '../shared/models/visitor.model';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss'],
})
export class VisitorComponent implements OnInit {
  @Input() visitor: Visitor;

  constructor() {}

  ngOnInit(): void {}
}
