import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../models/Email';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private request: HttpClient) { }

  private url: string = 'https://mediumspringgreen-owl-429639.hostingersite.com/api';

  create(obj: Email):Observable<Email>{
    return this.request.post<Email>(`${this.url}/enviar-email`,obj)
  }
}
