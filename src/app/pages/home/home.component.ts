import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/home/header/header.component';
import { SkillComponent } from '../../components/home/skill/skill.component';
import { ExperienceComponent } from '../../components/home/experience/experience.component';
import { ServiceComponent } from '../../components/home/service/service.component';
import { AboutComponent } from '../../components/home/about/about.component';
import { ProjectComponent } from '../../components/home/project/project.component';
import { ContactComponent } from '../../components/home/contact/contact.component';
import { FooterComponent } from '../../components/layouts/footer/footer.component';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent,SkillComponent,ExperienceComponent, ServiceComponent,AboutComponent,ProjectComponent,ContactComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
