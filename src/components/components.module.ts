import { NgModule } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [CalculatorComponent],
  imports: [IonicModule],
	exports: [CalculatorComponent]
})
export class ComponentsModule {}
