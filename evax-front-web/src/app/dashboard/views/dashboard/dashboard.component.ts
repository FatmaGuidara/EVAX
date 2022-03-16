import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../controllers/dashboard.service';
import { Cities } from '../../models/Cities.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService : DashboardService)  { }

  cities!: Cities[];
  
  registeredCitizensNumber!: number;
  registeredNotInvitedCitizensNumber!: number;
  todayRegisteredCitizensNumber!: number;

  ngOnInit(): void {
    this.dashboardService.getCities().subscribe(cities=>{
      this.cities=cities;
    });
    this.dashboardService.getRegisteredCitizensNumber().subscribe(registeredCitizensNumber=>{
      this.registeredCitizensNumber=registeredCitizensNumber;
    });
    this.dashboardService.getRegisteredNotInvitedCitezensNumber().subscribe(registeredNotInvitedCitizensNomber=>{
      this.registeredNotInvitedCitizensNumber=registeredNotInvitedCitizensNomber;
    });
    this.dashboardService.getTodayRegisteredCitizensNumber().subscribe(todayRegisteredCitizensNumber=>{
      this.todayRegisteredCitizensNumber=todayRegisteredCitizensNumber;
    });
  }

}
