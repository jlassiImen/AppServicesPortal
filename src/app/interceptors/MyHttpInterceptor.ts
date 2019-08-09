import { finalize, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent,HttpHandler,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader/loader-service.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor{

    constructor(private loaderService: LoaderService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();
        console.log('innnnnnnnnnneteeeeeeeeeeeer');
        return next.handle(req).pipe(
            finalize(() => this.loaderService.hide())
        );
    }

}