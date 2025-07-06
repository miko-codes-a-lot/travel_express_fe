import { Component, OnInit } from '@angular/core';
import { RouteForm } from '../route-form/route-form';
import { RouteService } from '../../../shared/service/route-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '../../../shared/interface/route';

@Component({
  selector: 'app-route-edit',
  imports: [RouteForm],
  templateUrl: './route-edit.html',
  styleUrl: './route-edit.css'
})
export class RouteEdit implements OnInit {
  isLoading = false

  id!: number
  doc?: Route

  constructor(
    private readonly routeService: RouteService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']

    this.isLoading = true

    this.routeService.getOne(this.id).subscribe({
      next: (doc) => this.doc = doc,
      error: (err) => console.error(err)
    }).add(() => this.isLoading = false)
  }

  onSubmit(data: Route) {
    this.isLoading = true
    this.routeService.update(this.id, data).subscribe({
      next: (doc) => this.router.navigate(['admin/routes/details', doc.id]),
      error: (err) => console.error(err)
    }).add(() => this.isLoading = false)
  }
}
