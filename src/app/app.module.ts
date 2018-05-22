import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductsService } from './service/product.service';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ {
    provide: 'ProductsService',
    useClass: ProductsService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
