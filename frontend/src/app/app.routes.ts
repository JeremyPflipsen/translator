import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArchitectureComponent } from './architecture/architecture.component';

export const routes: Routes = [{
    path: '',
    component: HomeComponent,
    title: 'Home Page'
}, {
    path: 'architecture',
    component: ArchitectureComponent,
    title: 'Architecture'
},];