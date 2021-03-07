import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {'id': 1, 'name':'Angular'},
    {'id': 2, 'name':'Node'},
    {'id': 3, 'name':'React'},
    {'id': 4, 'name':'MongoDB'},
    {'id': 5, 'name':'Flutter'}
  ]
  constructor(private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSelect(department){
    //this.router.navigate(['/department-list',department.id])

    this.router.navigate([department.id],{relativeTo:this.activatedRoute})
  }

}
