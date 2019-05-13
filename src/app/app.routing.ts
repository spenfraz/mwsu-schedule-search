import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { SectionsComponent } from './components/sections/sections.component';

const appRoutes: Routes = [
/*{
	path:'',
	component: HomeComponent
},
{
	path:'about',
	component: AboutComponent
}*/
{
	path:'sections',
	component: SectionsComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
	
