import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { PageComponent } from '../page/page.component';

const routes: Routes = [
  {
    path: 'page',
    component: PageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
