import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://127.0.0.1:3000/api/register';
const loginurl = 'http://127.0.0.1:3000/api/login';
const userverification = 'http://127.0.0.1:3000/api/userverify';
const userDetailurl = 'http://127.0.0.1:3000/api/userdetail';
const resulturl = ' http://127.0.0.1:3000/api/algorithm';
const predurl = ' http://127.0.0.1:5000/algorithm';
const user = ' http://127.0.0.1:3000/api/userhabits';


@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(resulturl);
  }
  gethabits(){
    return this.http.get(user);
  }
  create(data:any) {
    return this.http.post(baseUrl, data);
  }

  find(logindet: any){
    return this.http.post(loginurl, logindet);
  }

  verify() {
    return this.http.get(userverification);
  }

  send(userdata: any){
    return this.http.post(userDetailurl, userdata);
  }

  result(){
    return this.http.get(predurl);
  }
}
