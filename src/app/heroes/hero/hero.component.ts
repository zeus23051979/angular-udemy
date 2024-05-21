import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Juan';
  public age: number = 30;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription(): string {
    return this.name + ' ' + this.age;
  }

  changeHero(): void {
    this.name = 'Armando';
  }

  changeAge(): void {
    this.age = 45;
  }

  reset(): void {
    this.name = 'Juan';
    this.age = 30;
  }

}
