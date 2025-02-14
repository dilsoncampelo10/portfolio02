import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ISkill } from '../../../interfaces/ISkill';
import { skills } from '../../../data/skills';

@Component({
  selector: 'app-skill',
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  @ViewChild('description') descriptionElement!: ElementRef;
  xp: number = 0;

  ngAfterViewInit() {
    document.addEventListener('click', () => {
      new Audio('assets/audios/elephant.mp3').play()
    }, { once: true }); 
  }

  skills: ISkill[] = skills;

  updateXP(value: number) {
    this.xp = value;
  }
  updateDescription(description: string){
    this.descriptionElement.nativeElement.innerHTML = description
  }
}
