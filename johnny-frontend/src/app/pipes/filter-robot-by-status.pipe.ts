import { Pipe, PipeTransform } from '@angular/core';
import { Robotdetails } from '../model/robotdetails.type';

@Pipe({
  name: 'filterRobotByStatus'
})
export class FilterRobotByStatusPipe implements PipeTransform {

  transform(robotdetails: Robotdetails[], status: string): Robotdetails[] {
      if(!status){
        return robotdetails;
      }
      
      const text = status.toLowerCase();
      return robotdetails.filter(robot => {
        return robot.status.includes(status);
      })
    }

}
