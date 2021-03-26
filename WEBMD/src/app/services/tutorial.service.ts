import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://127.0.0.1:3000/api/register';
const loginurl = 'http://127.0.0.1:3000/api/login';
const userDetailurl = 'http://127.0.0.1:3000/api/userdetail';
const resulturl = ' http://127.0.0.1:3000/api/algorithm';
const predurl = ' http://127.0.0.1:5000/algorithm';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(resulturl);
  }

  create(data:any) {
    return this.http.post(baseUrl, data);
  }

  find(logindet: any){
    return this.http.post(loginurl, logindet);
  }

  send(userdata: any){
    return this.http.post(userDetailurl, userdata);
  }

  result(){
    return this.http.get(predurl);
  }
}
