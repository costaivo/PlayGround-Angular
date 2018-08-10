import { Injectable, Injector } from '@angular/core'
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(req, next) {
        // Injected indirectly since it was causing dependency issuse
        var authService = this.injector.get(AuthService);
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'token ' + authService.token)
        })
        return next.handle(authRequest)
    }
}