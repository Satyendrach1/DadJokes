import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DadjokesService {

  constructor(private http:HttpClient) { }

  getRandomJokes(){
    let url="https://dadjokeapi.azurewebsites.net/api/DadJokes/GetRandomJoke";
    return this.http.get(url);
  }
  getJokesCount(){
    let url="https://dadjokeapi.azurewebsites.net/api/DadJokes/GetJokeCount";
    return this.http.get(url);
  }
}
