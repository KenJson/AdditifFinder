
import { Routes } from '@angular/router';

import { StandbyComponent } from './standby/standby.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { additiveResolverResolver } from './additive-resolver.resolver';

export const routes: Routes = [

    { path: 'standby', component: StandbyComponent },
    { path: 'search', component: SearchComponent },
    {
        path: 'list',
        children: [
            { path: '', component: ListComponent },
            { path: ':id', component: DetailComponent, resolve: { item: additiveResolverResolver } },


        ]
    },

    { path: '', redirectTo: '/standby', pathMatch: 'full' },
    { path: '**', redirectTo: '/standby', pathMatch: 'full' }

];
