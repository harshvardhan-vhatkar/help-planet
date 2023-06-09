import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './helpers';
import { PredictionsComponent } from './predictions/predictions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    {path: 'future', component:PredictionsComponent, canActivate: [AuthGuard]  },
    {path:"about",component:AboutUsComponent, canActivate: [AuthGuard]},
    {path:"contact", component:ContactUsComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }