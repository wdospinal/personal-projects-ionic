import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../model/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project;

  @Output()
  change: EventEmitter<Project> = new EventEmitter<Project>();

  constructor() { }

  ngOnInit() {
  }
  doLike() {
    this.change.emit(this.project);
  }

}
