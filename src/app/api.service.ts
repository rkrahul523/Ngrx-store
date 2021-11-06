import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  
  constructor(private http: HttpClient) { }



  getBooks(){
    return this.http.get('assets/book.json')
  }

}