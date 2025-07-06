import { Component, OnInit } from '@angular/core';
import { Route } from '../../../shared/interface/route';
import { Router } from '@angular/router';
import { RouteService } from '../../../shared/service/route-service';

@Component({
  selector: 'app-route-list',
  imports: [],
  templateUrl: './route-list.html',
  styleUrl: './route-list.css'
})
export class RouteList implements OnInit {
  data: Route[] = []

  constructor(
    private readonly routeService: RouteService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.routeService.getAll().subscribe({
      next: (data) => {
        this.data = data
        console.log(data, 'data')
      }
    })
  }

  onCreate() {
    this.router.navigate(['admin/routes/create'])
  }

  onView(id: number) {
    this.router.navigate(['admin/routes/details', id])
  }

  onEdit(id: number) {
    this.router.navigate(['admin/routes/edit', id])
  }

}
