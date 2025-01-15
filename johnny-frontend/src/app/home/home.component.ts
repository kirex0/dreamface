import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterRobotsPipe } from '../pipes/filter-robots.pipe';
import { Robotdetails } from '../model/robotdetails.type';
import { RobotdetailsService } from '../services/robotdetails.service';
import { catchError } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { FilterRobotByStatusPipe } from '../pipes/filter-robot-by-status.pipe';
import { StatusColorService } from '../services/status-color.service';


@Component({
  standalone: true,
  imports: [FormsModule, FilterRobotsPipe, MatSelectModule, FilterRobotByStatusPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {


  // Defining injections
  robotDetailsService = inject(RobotdetailsService); // Used to make API calls
  router = inject(Router);                           // Used to route to the robotdetail component
  statusColorService = inject(StatusColorService);   // Used to change the color of the status of the robot in the table

  robotItems = signal<Array<Robotdetails>>([]);      // Stores a list of all robots after API call is made
  searchTerm = signal('');                           // String to filter robot names by
  selectedStatus = signal('');                       // Status string selected in the drop down menu

  // Navigates to robotdetails page and passes id in the parameter
  onRobotClick(id: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: { id: id }
    };
    this.router.navigate(['/robotdetails'], navigationExtras);
  }

  // Sorts the robots based on different fields when the name of the field is clicked on in the table
  sortRobots(sortBy: string){
    const sortedRobots = this.robotItems().sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'status') {
        return a.status.localeCompare(b.status);
      } else if (sortBy === 'date') {
        return a.lastUpdated.getTime() - b.lastUpdated.getTime();
      }
      return 0;
    });
    this.robotItems.set(sortedRobots);
  }

    // Dropdown menu used to filter by status
    dropdownFunction() {
    document.getElementById("myDropdown")?.classList.toggle("show");
  }

  ngOnInit(): void {
    this.robotDetailsService.getRobots() // Calls the API to populate the list of robots
      .pipe(
        catchError((err) => {
          console.error('Error fetching robots:', err);
          return [];
        })
      ).subscribe((robots) => {
        const formattedRobots = robots.map(robot => ({  // formats the robots "lastUpdated" to be human readable
          ...robot,
          lastUpdated: new Date(robot.lastUpdated)
        }));
        this.robotItems.set(formattedRobots);
      });
    }
}
