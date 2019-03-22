import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { PageOneComponent } from '../page-one/page-one.component';
import { PageTwoComponent } from '../page-two/page-two.component';
///
/// NOTE: THIS IS WRONG!
///
const routes: Routes = [
  // The routes are ordered on importance. the first hit will be the result.
  {
    path: '**',
    component: NotFoundComponent
  },
  {
    path: 'pages',
    children: [
      {
        path: 'one',
        component: PageOneComponent
      },
      {
        path: 'two',
        component: PageTwoComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'one'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
