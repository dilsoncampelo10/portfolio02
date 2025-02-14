import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/home/header/header.component';
import { SkillComponent } from '../../components/home/skill/skill.component';
import { ExperienceComponent } from '../../components/home/experience/experience.component';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent,SkillComponent,ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
