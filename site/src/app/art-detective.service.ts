import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtDetectiveService {

  private REST_API_SERVER = "http://localhost:3000/artdetective";

  constructor(private httpClient: HttpClient) { }

  public getAll(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public getByID(id) {
    return this.httpClient.get(this.REST_API_SERVER + id); 
  }
}