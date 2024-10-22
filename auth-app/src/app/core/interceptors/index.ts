import {authInterceptor} from "./auth.interceptor";
import {HttpInterceptorFn} from "@angular/common/http";

export const INTERCEPTORS:HttpInterceptorFn[] = [authInterceptor]