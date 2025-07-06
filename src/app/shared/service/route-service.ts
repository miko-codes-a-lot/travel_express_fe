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

  getOne(id: number) {
    return this.http.get<Route>(`/api/routes/${id}`)
  }

  create(data: Route) {
    return this.http.post<Route>('/api/routes', data)
  }

  update(id: number, data: Route) {
    return this.http.put<Route>(`/api/routes/${id}`, data)
  }
}
