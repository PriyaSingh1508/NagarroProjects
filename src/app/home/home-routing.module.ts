import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        //   canActivate: [],
       
      },
      // {
      //   path: '**',
      //   component: NotFoundComponent,
      // },
    ]),
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
