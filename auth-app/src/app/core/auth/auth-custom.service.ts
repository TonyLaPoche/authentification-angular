import {inject, Injectable, signal} from "@angular/core";
import {AuthService, User} from "@auth0/auth0-angular";
import {distinctUntilChanged, tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AuthCustomService {
    authService: AuthService = inject(AuthService);
    readonly isLogged = signal<boolean>(false);
    private readonly isLoggedIn$ = this.authService.isAuthenticated$;
    private readonly user = signal<User | null>(null)

    constructor() {
        this.isLoggedIn$.pipe(
            tap(isLoggedIn => {
                console.log(isLoggedIn)
                this.isLogged.update(() => isLoggedIn)
            })
        ).subscribe()

        this.authService.user$.pipe(
            distinctUntilChanged(),
            tap(user => this.user.set(user ?? null))
        ).subscribe()
    }

    loginWithGoogle() {
        this.authService.loginWithRedirect({
                authorizationParams: {
                    connection: 'google-oauth2'
                }
            }
        );
    }
    logout() {
        this.authService.logout({ logoutParams: { returnTo: window.location.origin } })
    }
    getUserInfo(): User | null {
        return this.user();
    }

    isAuthenticated(): boolean {
        return this.isLogged();
    }
}