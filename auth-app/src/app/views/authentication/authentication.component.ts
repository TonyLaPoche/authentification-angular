import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {User} from "@auth0/auth0-angular";
import {AsyncPipe, DatePipe, JsonPipe, NgOptimizedImage} from "@angular/common";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatIcon, MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {AuthCustomService} from "../../core/auth/auth-custom.service";
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle
} from "@angular/material/card";

@Component({
    selector: 'app-authentication',
    standalone: true,
    imports: [
        AsyncPipe,
        MatIcon,
        MatFabButton,
        JsonPipe,
        MatCardHeader,
        MatCard,
        MatCardContent,
        DatePipe,
        MatCardActions,
        MatCardTitle,
        MatCardSubtitle,
        MatButton,
        NgOptimizedImage
    ],
    template: `
        <div>
            @if (authCustomService.isLogged()) {
                <p>Welcome, you are logged in!</p>
                <button mat-fab extended
                        (click)="authCustomService.logout()">
                    <mat-icon svgIcon="google-auth2"></mat-icon>
                    Logout
                </button>
            } @else {
                <div>
                    <button mat-fab extended (click)="authCustomService.loginWithGoogle()">
                        <mat-icon svgIcon="google-auth2"></mat-icon>
                        Login
                    </button>
                </div>
            }
        </div>
        @if (user()) {
            <mat-card class="user-card">
                <mat-card-header>
                    <div mat-card-avatar class="user-image">
                        <img ngSrc="{{user()?.picture}}" alt="User image" width="40" height="40"/>
                    </div> 
                    <mat-card-title>{{ user()?.name }}</mat-card-title>
                    <mat-card-subtitle>{{ user()?.email }}</mat-card-subtitle>
                </mat-card-header>
                <mat-card-content>
                    <p><strong>Given Name:</strong> {{ user()?.given_name }}</p>
                    <p><strong>Family Name:</strong> {{ user()?.family_name }}</p>
                    <p><strong>Nickname:</strong> {{ user()?.nickname }}</p>
                    <p><strong>Email Verified:</strong> {{ user()?.email_verified ? 'Yes' : 'No' }}</p>
                    <p><strong>Updated At:</strong> {{ user()?.updated_at | date: 'short' }}</p>
                </mat-card-content>
                <mat-card-actions>
                    <button mat-button>VIEW PROFILE</button>
                </mat-card-actions>
            </mat-card>

        }
    `,
    styles: `
      .user-card {
        max-width: 400px;
        margin: 20px auto;
      }

      .user-image {
        width: 40px;
        height: 40px;
      }

      .user-image img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      mat-card-actions {
        display: flex;
        justify-content: flex-end;
      }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticationComponent implements OnInit {
    authCustomService = inject(AuthCustomService);
    user = signal<User | null>(null)
    private readonly matIconRegistry = inject(MatIconRegistry);
    private readonly domSanitizer: DomSanitizer = inject(DomSanitizer);

    constructor() {
        this.matIconRegistry.addSvgIcon('google-auth2', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/google-icon.svg'));
    }

    ngOnInit() {
        this.user.set(this.authCustomService.getUserInfo())
    }

}
