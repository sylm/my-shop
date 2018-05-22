import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FilterModel, Product } from 'app/model/models';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductsService {

    constructor(private http: Http) {
    }
    getProducts(filterModel: FilterModel): Observable<Product[]> {
        return this.http.get('/assets/data/products.json').map(this.extractData);
      }

      private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }
}