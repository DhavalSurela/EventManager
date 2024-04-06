import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrl: './dashboard-user.component.css'
})
export class DashboardUserComponent {
  selectedcomponent: string
  debugger
  load(component: string): void {
    this.selectedcomponent = component
  }
}
