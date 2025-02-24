import { Component } from '@angular/core';
import { Card3dComponent } from '../../utils/card3d/card3d.component';
import { projects } from '../../../data/projects';
import { IProject } from '../../../interfaces/IProject';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [Card3dComponent,CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projects: IProject[] = projects;
}
