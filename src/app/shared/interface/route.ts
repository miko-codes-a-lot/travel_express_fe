export interface Route {
  id: number
  routeCode: string
  origin: string
  destination: string
  durationHours: number
  distanceKM: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}