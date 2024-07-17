import {HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {inject} from "@angular/core";
import {AuthService} from "../auth-service";

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  const clonedRequest = req.clone({
    setHeaders: {
      'Content-Type': 'application/json',
      ...(token ? { 'authorization': `${token}` } : {})
    }
  });

  return next(clonedRequest);
};
