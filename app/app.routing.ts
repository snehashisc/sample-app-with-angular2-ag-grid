import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserMainComponent} from './components/userMain.component';

const appRoutes: Routes = [
    {
        path:'',
        component: UserMainComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);