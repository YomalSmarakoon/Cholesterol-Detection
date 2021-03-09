import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  create(data: { fname: string; lname: string; email: string; password: string; cpassword: string; }) {
    return this.http.put(baseUrl, data);
  }
}
