import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitors-list',
  templateUrl: './visitors-list.component.html',
  styleUrls: ['./visitors-list.component.scss'],
})
export class VisitorsListComponent implements OnInit {
  visitorsList: Array<{ name: string; email: string }> = [];

  constructor() {}

  ngOnInit(): void {}

  addNewVisitor() {
    this.visitorsList.push({ name: 'visitor1', email: 'visitor1@test.com' });
  }
}
