import { Component, inject, OnInit, signal} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Robotdetails } from '../model/robotdetails.type';
import { RobotdetailsService } from '../services/robotdetails.service';
import { catchError } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import { StatusColorService } from '../services/status-color.service';
@Component({
  selector: 'app-details',
  providers: [],
  imports: [MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{

  robotDetailsService = inject(RobotdetailsService);   // Used for API calls
  statusColorService = inject(StatusColorService);     // Used to color the staus of the robot

  robotId: string = 'default';                         // Default string that will be updated when the API populates the data
  constructor(private route: ActivatedRoute) {}        // Used to recieve incoming parameters when routed to this component
  robotInfo = signal<Robotdetails | null>(null);       // Stores the Robot's data to display to the user
  

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.robotId = params['id']; // Id passes in the parameter
      });
      this.robotDetailsService.getRobotById(this.robotId)
      .pipe(
        catchError((err) => {
          console.error('Error fetching robots:', err);
          return [];
        })
      ).subscribe((robot) => {
          robot.lastUpdated = new Date(robot.lastUpdated); // Makes the date human readable
          this.robotInfo.set(robot); // updates robot info after the robot's data has been returned by the API
      });
  }
}
