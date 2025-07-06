import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Route } from '../../../shared/interface/route';
import { RxRoute } from './rx-route';

@Component({
  selector: 'app-route-form',
  imports: [ReactiveFormsModule],
  templateUrl: './route-form.html',
  styleUrl: './route-form.css'
})
export class RouteForm implements OnInit {
  @Input() route: Route = {
    id: 0,
    destination: '',
    routeCode: '',
    origin: '',
    distanceKM: 0,
    durationHours: 0,
    isActive: true,
    createdAt: '',
    updatedAt: ''
  }
  @Input() isSubmit = false

  @Output() onSave = new EventEmitter<Route>();

  rxform!: FormGroup<RxRoute>

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.rxform = this.fb.nonNullable.group({
      id: [this.route.id],
      destination: [this.route.destination],
      routeCode: [this.route.routeCode],
      origin: [this.route.origin],
      distanceKM: [this.route.distanceKM],
      durationHours: [this.route.durationHours],
      isActive: [this.route.isActive],
    })
  }

  onSubmit() {
    const route: Route = {
      id: +this.rxform.controls.id.value,
      destination: this.rxform.controls.destination.value,
      routeCode: this.rxform.controls.routeCode.value,
      origin: this.rxform.controls.origin.value,
      distanceKM: this.rxform.controls.distanceKM.value,
      durationHours: this.rxform.controls.durationHours.value,
      isActive: this.rxform.controls.isActive.value,
      createdAt: this.route.createdAt,
      updatedAt: this.route.updatedAt,
    }
    this.onSave.emit(route)
  }
}
