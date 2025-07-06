import { FormControl } from "@angular/forms"

export interface RxRoute {
  id: FormControl<number>
  destination: FormControl<string>;
  routeCode: FormControl<string>;
  origin: FormControl<string>;
  distanceKM: FormControl<number>;
  durationHours: FormControl<number>;
  isActive: FormControl<boolean>;
}