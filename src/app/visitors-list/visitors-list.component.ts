import { Component, OnInit } from '@angular/core';
import { Visitor } from '../shared/models/visitor.model';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-visitors-list',
  templateUrl: './visitors-list.component.html',
  styleUrls: ['./visitors-list.component.scss']
})
export class VisitorsListComponent implements OnInit {
  visitorsList: Array<Visitor> = [];
  editMode = false;
  iconfaUserPlus = faUserPlus;

  constructor() {}

  ngOnInit(): void {}

  addNewVisitor() {
    this.editMode = true;
    this.visitorsList.push({
      name: '',
      email: ''
    });
  }

  closeVisitor(visitor, index) {
    this.editMode = false;
    if (visitor.name === '' || visitor.email === '') {
      this.visitorsList.splice(index, 1);
    }
  }
}
