import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-card3d',
  templateUrl: './card3d.component.html',
  styleUrls: ['./card3d.component.scss']
})
export class Card3dComponent implements OnInit {
  @ViewChild('rendererCanvas', { static: true }) rendererCanvas!: ElementRef;

  @Input() project: any;

  ngOnInit() {
    this.initThreeJS();
  }

  initThreeJS() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 300 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: this.rendererCanvas.nativeElement, alpha: true });
    
    renderer.setSize(700, 800);
    
    const geometry = new THREE.BoxGeometry(2, 2, 0.1);
    
    const tempMaterial = new THREE.MeshBasicMaterial({ color: 'white' });
    

    const card = new THREE.Mesh(geometry, tempMaterial);
    scene.add(card);
    

    camera.position.z = 5;
    

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      this.project.image,
      (texture) => {
        card.material.map = texture;
        card.material.needsUpdate = true;
      },
      undefined,
      (error) => {
        console.error('Erro ao carregar a textura:', error);
      }
    );
    
    // Animação
    function animate() {
      requestAnimationFrame(animate);
      card.rotation.y += 0.005;
      renderer.render(scene, camera);
    }
    
    animate();
    
    
  }
}
