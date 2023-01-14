import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IntAuthGuard } from "./integration/guards/int-auth.guard";
import { IntUnuthGuard } from "./integration/guards/int-unauth.guard";
import { IntLoginComponent } from "./integration/components/login/int-login.component";
import { AuthComponent } from "./modules/pages/auth/auth.component";
import { LoginComponent } from "./modules/pages/login/login.component";import { RegisterComponent } from "./modules/pages/register/register.component";
import { WelcomeComponent } from "./modules/pages/welcome/welcome.component";
import { AuthGuard } from "./modules/pages/login/log-auth.guard";

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'auth/:id', component: AuthComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./modules/pages/home/home.module').then(ac => ac.HomeModule)
  },
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
