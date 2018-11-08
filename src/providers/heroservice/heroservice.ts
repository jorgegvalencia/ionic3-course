import { Injectable } from '@angular/core';
import { Hero } from '../../models/hero';

/*
  Generated class for the HeroserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HeroServiceProvider {

  heroes: Hero[] = [
    {
      name: 'Midoriya',
      quirk: 'Has superhuman Strength'
    },
    {
      name: 'Bakugo',
      quirk: 'Can create explosions from the nitroglycerine of his sweat'
    },
    {
      name: 'Todoroki',
      quirk: 'Can generate powerfull flames and ice constructions from the two halfs of his body'
    }
  ];

  constructor() {
    console.log('Hello HeroserviceProvider Provider');
  }

  addHero(name, quirk){
    this.heroes.push(new Hero(name, quirk));
  }

}
