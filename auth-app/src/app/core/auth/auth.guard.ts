import { Injectable } from '@angular/core';
import { CanMatch, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {AuthService} from "@auth0/auth0-angular";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanMatch {

    constructor(private readonly authService: AuthService, private readonly router: Router) {}

    canMatch(
        route: Route,
        segments: UrlSegment[]
    ): Observable<boolean> {
        return this.authService.isAuthenticated$.pipe(
            tap(isAuthenticated => {
                if (!isAuthenticated) {
                    // Redirection vers la page de connexion si l'utilisateur n'est pas authentifié
                    this.router.navigate(['/home']);
                }
            }),
            map(isAuthenticated => isAuthenticated) // Retourner true si authentifié, sinon false
        );
    }
}
