import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IntAuthGuard } from "./integration/guards/int-auth.guard";
import { IntUnuthGuard } from "./integration/guards/int-unauth.guard";
import { IntLoginComponent } from "./integration/login/int-login.component";
import { HomeComponent } from "./modules/pages/home/home.component";
import { WelcomeComponent } from "./modules/pages/welcome/welcome.component";

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'integration/login',
    component: IntLoginComponent,
    canActivate: [IntUnuthGuard]
  },
  {
    path: 'integration',
    loadChildren: () => import('./integration/integration.module').then(m => m.IntegrationModule),
    canActivate: [IntAuthGuard]
  },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
