import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeersProvider } from '../../providers/beers/beers';

/**
 * Generated class for the BeersDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beers-detail',
  templateUrl: 'beers-detail.html',
})
export class BeersDetailPage {

  beer: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public beersService: BeersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeersDetailPage');
    const beerId = this.navParams.data.id;
    const beers = this.beersService.getBeers().then(beers => {
      this.beer = beers[beerId] || {};
      console.log(this.beer);
    });
  }

}
