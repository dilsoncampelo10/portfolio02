import { Component } from '@angular/core';
import { CardComponent } from '../../utils/card/card.component';
import { IService } from '../../../interfaces/IService';
import { services } from '../../../data/services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  imports: [CardComponent,CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  services: IService[] = services;
}
