import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterRobotsPipe } from '../pipes/filter-robots.pipe';
import { Robotdetails } from '../model/robotdetails.type';
import { RobotdetailsService } from '../services/robotdetails.service';
import { catchError } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { FilterRobotByStatusPipe } from '../pipes/filter-robot-by-status.pipe';


@Component({
  standalone: true,
  imports: [FormsModule, FilterRobotsPipe, MatSelectModule, FilterRobotByStatusPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  robotDetailsService = inject(RobotdetailsService);
  selectedStatus = signal('');
  router = inject(Router);
  robotItems = signal<Array<Robotdetails>>([]);
  searchTerm = signal('');

  onRobotClick(id: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: { id: id }
    };
    this.router.navigate(['/robotdetails'], navigationExtras);
  }

    dropdownFunction() {
    document.getElementById("myDropdown")?.classList.toggle("show");
  }

  ngOnInit(): void {
    this.robotDetailsService.getRobots()
      .pipe(
        catchError((err) => {
          console.error('Error fetching robots:', err);
          return [];
        })
      ).subscribe((robots) => {
        this.robotItems.set(robots);
      });
    }
}
