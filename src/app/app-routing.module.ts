import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TablesComponent } from './tables/tables.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { Login2Component } from './login2/login2.component';


const routes: Routes = [
  {
    path: 'login',
    component: Login2Component
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'tables', component: TablesComponent, canActivate: [AuthGuard] },
      { path: 'page1/:id', component: Page1Component },
      { path: 'page2', component: Page2Component },
      { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
      { path: 'ui',     loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
    ]
  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: true,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
