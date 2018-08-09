import { Injectable } from '@angular/core'
import { HttpInterceptor } from '@angular/common/http'

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(req, next) {
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'token ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YjZjMjMzMjgwNDM0MDU2ZjRiZGM4MTMifQ.6BpBliKtwxVfdXJOZTFKB-Ug46vu8mn2L1L-xjiVFH8')
        })
        return next.handle(authRequest)
    }
}