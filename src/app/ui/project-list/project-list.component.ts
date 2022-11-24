import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import {Observable} from "rxjs";
import {ProjectModel} from "../../model/project.model";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent {
  data$: Observable<ProjectModel[] | null> = this._projectService.getAll();

  constructor(private _projectService: ProjectService) {
  }
}
