import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {AsyncPipe} from "@angular/common";

@Component({
    selector: 'app-authentication',
    standalone: true,
    imports: [
        AsyncPipe
    ],
    template: `
        <div>
            @if (authService.isAuthenticated$ | async) {
                <p>Welcome, you are logged in!</p>
                <button (click)="authService.logout({ logoutParams: { returnTo: 'http://localhost:4200/home' } })">Logout</button>
            } @else {
                <div>
                    <button (click)="loginWithGoogle()">Login</button>
                </div>
            }
        </div>
    `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticationComponent {
    authService: AuthService = inject(AuthService);

    loginWithGoogle() {
        this.authService.loginWithRedirect({
            authorizationParams: {
                connection: 'google-oauth2'  // Spécifie Google comme fournisseur
            }
        });
    }
}
