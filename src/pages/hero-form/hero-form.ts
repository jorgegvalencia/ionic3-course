import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeroServiceProvider } from '../../providers/heroservice/heroservice';

/**
 * Generated class for the HeroFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hero-form',
  templateUrl: 'hero-form.html',
})
export class HeroFormPage {

  name: string;
  quirk: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private heroService: HeroServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeroFormPage');
  }

  addHero(){
    this.heroService.addHero(this.name, this.quirk);
    this.navCtrl.pop();
  }

}
