import { finalize, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent,HttpHandler,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader/loader-service.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor{

    constructor(private loaderService: LoaderService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("sssssssssssssssssssssssssssssssssssssss");
        this.loaderService.show();
       

        const idToken = localStorage.getItem("token");
console.log("saved toekn   "+idToken);
        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",idToken)
            });

            return next.handle(cloned).pipe(
                finalize(() => this.loaderService.hide())
            );
        }
        else {
            return next.handle(req).pipe(
                finalize(() => this.loaderService.hide())
            );
        }

        
    }

}