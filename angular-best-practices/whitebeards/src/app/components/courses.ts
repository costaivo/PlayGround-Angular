import { Component } from '@angular/core';

import { DataRepositoryService } from "../services/data-repository"

@Component({
  styleUrls: ['../styles/catalog.css'],
  templateUrl: '../templates/catalog.html'
})
export class CoursesComponent {
  classes:any[] | undefined;
  visibleClasses:any[] | undefined;

  constructor(private dataRepository:DataRepositoryService) {
    this.classes=[];
  }

  ngOnInit() {
    this.dataRepository.getCatalog()
      .subscribe(classes => {
        this.classes = classes;
        this.applyFilter('')});
  }

  enroll(classToEnroll:any) {
    classToEnroll.processing = true;
    this.dataRepository.enroll(classToEnroll.classId)
      .subscribe(
        (err) => {console.error(err); classToEnroll.processing = false}, //add a toast message or something
        () => {classToEnroll.processing = false; classToEnroll.enrolled=true;},
      );
  }

  drop(classToDrop:any) {
    classToDrop.processing = true;
    this.dataRepository.drop(classToDrop.classId)
      .subscribe(
        (err) => { console.error(err); classToDrop.processing = false}, //add a toast message or something
        () => {classToDrop.processing = false; classToDrop.enrolled=false;}
      );
  }

  applyFilter(filter:any) {
    if (!filter)
      return this.visibleClasses = this.classes;

    if (filter === 'GEN') {
      return this.visibleClasses = this.classes?.filter(c =>
        !c.course.courseNumber.startsWith('CH') &&
        !c.course.courseNumber.startsWith('PO') &&
        !c.course.courseNumber.startsWith('SP'));
    }

    return this.visibleClasses = this.classes?.filter(c => c.course.courseNumber.startsWith(filter));
  }
}
