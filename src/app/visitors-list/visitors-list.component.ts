import { Component, OnInit } from '@angular/core';
import { Visitor } from '../shared/models/visitor.model';

@Component({
  selector: 'app-visitors-list',
  templateUrl: './visitors-list.component.html',
  styleUrls: ['./visitors-list.component.scss'],
})
export class VisitorsListComponent implements OnInit {
  visitorsList: Array<Visitor> = [];

  constructor() {}

  ngOnInit(): void {}

  addNewVisitor() {
    this.visitorsList.push({ name: 'visitor1', email: 'visitor1@test.com' });
  }
}
