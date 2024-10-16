import {environment} from "../../../environments/environment";

export const authConfig = {
    domain: environment.authDomain,
    clientId: environment.authClientId,
    redirectUri: `${window.location.origin}/authentication`
};
