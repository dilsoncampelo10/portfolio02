import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../models/Email';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private request: HttpClient) { }

  private url: string = 'http://127.0.0.1:8000/api';

  create(obj: Email):Observable<Email>{
    return this.request.post<Email>(`${this.url}/enviar-email`,obj)
  }
}
