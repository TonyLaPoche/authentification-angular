import {Routes} from '@angular/router';
import {AuthGuard} from "./core/auth/auth.guard";

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'home',
        loadComponent: () => import('./views/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'authentication',
        loadComponent: () => import('./views/authentication/authentication.component').then(m => m.AuthenticationComponent),
    },
    {
        path: 'movies',
        loadComponent: () => import('./views/movies/movies.component').then(m => m.MoviesComponent),
        canMatch: [AuthGuard]
    }
];
