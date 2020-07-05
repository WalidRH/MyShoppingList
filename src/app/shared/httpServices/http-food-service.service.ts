import { ShoppingItem } from './../shopping-item';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpFoodServiceService {

  constructor( private http: HttpClient) { }

  getFoodCategorie(categorie: string) {
    const url: string = 'https://myshoppinglist-ead47.firebaseio.com/' + categorie + '.json/';
    console.log('URL : ', url);
    return this.http.get<{[ref: string]: ShoppingItem}>(url);
  }

  setFoodCategorie(categorie: string, newElement: ShoppingItem, ref: string) {
    console.log('Element to PUT ', newElement);
    console.log('the REF =======> ', ref);
    const url = 'https://myshoppinglist-ead47.firebaseio.com/' + categorie + '/' + ref + '.json';
    console.log('the URL =====> ', url);
    return this.http.put< ShoppingItem >(
      url,
      newElement
    );
  }

  postFoodCategorie(categorie: string, newElement: ShoppingItem) {
    const url = 'https://myshoppinglist-ead47.firebaseio.com/' + categorie + '.json/';
    return this.http.post(
      url,
      newElement
    );
  }

  deleteItem(categorie: string, elementToDelete: ShoppingItem) {
    const url = 'https://myshoppinglist-ead47.firebaseio.com/' + categorie + '/' + elementToDelete.ref + '.json/';
    return this.http.delete(url);
  }
}
