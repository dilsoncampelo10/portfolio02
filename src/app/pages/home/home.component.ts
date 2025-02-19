import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/home/header/header.component';
import { SkillComponent } from '../../components/home/skill/skill.component';
import { ExperienceComponent } from '../../components/home/experience/experience.component';
import { ServiceComponent } from '../../components/home/service/service.component';
import { AboutComponent } from '../../components/home/about/about.component';
import { ProjectComponent } from '../../components/home/project/project.component';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent,SkillComponent,ExperienceComponent, ServiceComponent,AboutComponent,ProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
