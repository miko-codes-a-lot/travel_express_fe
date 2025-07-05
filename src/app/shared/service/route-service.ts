import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from '../interface/route';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private readonly http: HttpClient) { }

  getAll() {
    return this.http.get<Route[]>('/api/routes')
  }
}
