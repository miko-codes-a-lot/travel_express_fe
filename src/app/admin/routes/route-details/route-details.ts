import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../../shared/service/route-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route as mRoute } from '../../../shared/interface/route';

@Component({
  selector: 'app-route-details',
  imports: [],
  templateUrl: './route-details.html',
  styleUrl: './route-details.css'
})
export class RouteDetails implements OnInit {
  isLoading = false

  id!: number
  doc?: mRoute

  constructor(
    private readonly routeService: RouteService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'] 
    this.isLoading = true

    this.routeService.getOne(this.id).subscribe({
    next: (doc) => this.doc = doc,
    error: (err) => console.error(err)
    }).add(() => this.isLoading = false)
  }

  onEdit() {
    this.router.navigate(['admin/routes/edit', this.id])
  }
}
