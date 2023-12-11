import { Routes } from '@angular/router';
import { AboutComponenetComponent } from './about-componenet/about-componenet.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { SeeOneComponent } from './see-one/see-one.component';
import { AddOneComponent } from './add-one/add-one.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about',
        component: AboutComponenetComponent
    },
    {
        path:'characters',
        component: CharactersComponent
    },
    {
        path:'more/:id',
        component:SeeOneComponent
    },
    {
        path:'add',
        component:AddOneComponent
    }
];
