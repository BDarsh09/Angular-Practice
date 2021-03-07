import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css'],
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId;
  constructor(private activatedroute: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    //this.departmentId = parseInt(this.activatedroute.snapshot.paramMap.get('id'));

    this.activatedroute.paramMap.subscribe((params:ParamMap) => {
      this.departmentId = parseInt(params.get('id'));
    })
  }

  onPrevious() {
    let previousId = this.departmentId - 1;
    //this.route.navigate(['/department-list', previousId]);

    this.route.navigate(['../',previousId],{relativeTo:this.activatedroute})
  }

  onNext() {
    let nextId = this.departmentId + 1;
    //this.route.navigate(['/department-list', nextId]);

    this.route.navigate(['../',nextId], { relativeTo: this.activatedroute });
  }

  showOverview(){
    this.route.navigate(['department-overview'], {relativeTo: this.activatedroute,});
  }

  showContact(){
    this.route.navigate(['department-contact'], {relativeTo: this.activatedroute,});
  }
}
