import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeProduct } from './product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API: string = 'https://5e79b4b817314d00161333da.mockapi.io/product';
  // products = Data;
  constructor(private http: HttpClient){ }

  getProducts(): Observable<TypeProduct[]>{
      // return this.products;
      return this.http.get<TypeProduct[]>(this.API)
  }

  get(id : any) : Observable<TypeProduct>{
    return this.http.get<TypeProduct>(`${this.API}/${id}`)
  }

  AddProduct(item : TypeProduct): Observable<TypeProduct>{
    return this.http.post<TypeProduct>(this.API, item)
    // this.products.push()
  }

  removeProduct(id: number) : Observable<TypeProduct>{
    return this.http.delete<TypeProduct>(`${this.API}/${id}`)
  }

  updateProduct(item: TypeProduct): Observable<TypeProduct> {
    return this.http.put<TypeProduct>(`${this.API}/${item.id}`, item);
  }
}
