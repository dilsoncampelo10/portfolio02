import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-card3d',
  templateUrl: './card3d.component.html',
  styleUrls: ['./card3d.component.scss']
})
export class Card3dComponent {
  @ViewChild('rendererCanvas', { static: true }) rendererCanvas!: ElementRef;

  @Input() project: any;

  
  
}
