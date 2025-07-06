import { Component } from '@angular/core';
import { RouteForm } from '../route-form/route-form';
import { Route } from '../../../shared/interface/route';
import { RouteService } from '../../../shared/service/route-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-create',
  imports: [RouteForm],
  templateUrl: './route-create.html',
  styleUrl: './route-create.css'
})
export class RouteCreate {
  isSubmit = false

  constructor(
    private readonly routeService: RouteService,
    private readonly router: Router,
  ) {}

  onSubmit(data: Route) {
    this.isSubmit = true
    this.routeService.create(data).subscribe({
      next: (doc) => this.router.navigate(['admin/routes/details', doc.id]),
      error: (err) => console.error(err)
    }).add(() => this.isSubmit = false)
  }
}
