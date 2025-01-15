import { Component, inject, OnInit, signal} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Robotdetails } from '../model/robotdetails.type';
import { RobotdetailsService } from '../services/robotdetails.service';
import { catchError } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-details',
  providers: [],
  imports: [MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{

  robotId: string = 'default';
  robotDetailsService = inject(RobotdetailsService);
  constructor(private route: ActivatedRoute) {}
  robotInfo = signal<Robotdetails | null>(null);

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.robotId = params['id'];
      });
      this.robotDetailsService.getRobotById(this.robotId)
      .pipe(
        catchError((err) => {
          console.error('Error fetching robots:', err);
          return [];
        })
      ).subscribe((robot) => {
          this.robotInfo.set(robot);
      });
  }
}
