import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withViewTransitions} from '@angular/router';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {provideAuth0} from "@auth0/auth0-angular";

import {routes} from './app.routes';
import {authConfig} from "./core/auth/auth.config";
import {INTERCEPTORS} from "./core/interceptors";

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes, withViewTransitions()),
        provideHttpClient(withInterceptors(INTERCEPTORS)),
        provideAnimationsAsync(),
        provideAuth0({
            domain: authConfig.domain,
            clientId: authConfig.clientId,
            authorizationParams: {
                redirect_uri: authConfig.redirectUri
            },
            cacheLocation:'memory',
            useRefreshTokens:true,
        })
    ]
};
