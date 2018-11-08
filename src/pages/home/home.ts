import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Hero } from '../../models/hero';
import { HeroFormPage } from '../hero-form/hero-form';
import { HeroServiceProvider } from '../../providers/heroservice/heroservice';
import { BeersProvider } from '../../providers/beers/beers';
import { BeersDetailPage } from '../beers-detail/beers-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  heroes: Hero[];
  beers: any[];

  constructor(
    public navCtrl: NavController,
    private heroService: HeroServiceProvider,
    private beersService: BeersProvider
    ) {
  }

  ngOnInit() {
    this.heroes = this.heroService.heroes;
    this.beersService.getBeers().then((beers: any[]) => {
      console.log(beers);
      this.beers = beers;
      this.beersService.beers = beers;
    })
  }

  navToPage(){
    this.navCtrl.push(HeroFormPage);
  }

  navToDetail(beer){
    this.navCtrl.push(BeersDetailPage, { id: beer.id });
  }

}
