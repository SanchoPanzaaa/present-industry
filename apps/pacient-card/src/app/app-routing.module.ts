import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AREA } from '@eleg/core';

import { environment } from './environments/environment';


const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{
		path: 'home',
		loadChildren: () => import('@present-industry/card-core').then((m) => m.CardCoreModule.forRoot(environment.firebase)),
		// canActivate: [AuthGuard],
		// canLoad: [AuthGuard],
	},
	{ path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always', scrollPositionRestoration: 'enabled' })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
