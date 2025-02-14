import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/home/header/header.component';
import { SkillComponent } from '../../components/home/skill/skill.component';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent,SkillComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
