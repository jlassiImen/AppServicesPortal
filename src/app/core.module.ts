import { HttpClientModule,HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CommonModule } from '@angular/common';
import { NgModule,ModuleWithProviders } from '@angular/core';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }
  
  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      TranslateModule.forChild({
        loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
  }),
    ],
    exports: [TranslateModule],
  })
  export class CoreModule {
  
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: CoreModule,
        providers: []
      }
    }
  }