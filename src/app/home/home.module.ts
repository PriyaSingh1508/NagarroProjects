import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { RouterModule } from '@angular/router';
import { OptionsCardComponent } from './options-card/options-card.component';

@NgModule({
  imports: [HomeRoutingModule,RouterModule],
  declarations: [HomeComponent, HeroSectionComponent, OptionsCardComponent],
  exports: [HomeComponent],
  providers: [],
})
export class HomeModule {}
