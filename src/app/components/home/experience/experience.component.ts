import { Component } from '@angular/core';
import { IExperience } from '../../../interfaces/IExperience';
import { experiences } from '../../../data/experiences';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
    experiencesJob: IExperience[] = experiences.filter(exp => exp.type==='job');
    experiencesAcademy: IExperience[] = experiences.filter(exp => exp.type==='academy');
    textColors: string[] = ['danger','success','primary','warning','light','info']  

 
    
}
