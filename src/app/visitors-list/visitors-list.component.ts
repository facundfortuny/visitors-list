import { Component, OnInit } from '@angular/core';
import { Visitor } from '../shared/models/visitor.model';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-visitors-list',
  templateUrl: './visitors-list.component.html',
  styleUrls: ['./visitors-list.component.scss'],
})
export class VisitorsListComponent implements OnInit {
  visitorsList: Array<Visitor> = [];
  iconfaUserPlus = faUserPlus;

  constructor() {}

  ngOnInit(): void {}

  addNewVisitor() {
    this.visitorsList.push({ name: 'visitor1', email: 'visitor1@test.com' });
  }
}
