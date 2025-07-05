import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../shared/service/route-service';
import { Route } from '../../shared/interface/route';

@Component({
  selector: 'app-routes',
  imports: [],
  templateUrl: './routes.html',
  styleUrl: './routes.css'
})
export class Routes implements OnInit {
  data: Route[] = []

  constructor(private readonly routeService: RouteService) {}

  ngOnInit(): void {
    this.routeService.getAll().subscribe({
      next: (data) => {
        this.data = data
        console.log(data, 'data')
      }
    })
  }
}
