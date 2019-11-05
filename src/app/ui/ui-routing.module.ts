import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconsComponent } from './icons/icons.component';

const routes: Routes = [
  { path: '', redirectTo: 'icons', pathMatch: 'full' },
  { path: 'icons', component: IconsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
