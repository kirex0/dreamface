import { Pipe, PipeTransform } from '@angular/core';
import { Robotdetails } from '../model/robotdetails.type';

@Pipe({
  name: 'filterRobotByStatus'
})
// Used to filter the robot based on status. This is used by the drop down menu in home component.
export class FilterRobotByStatusPipe implements PipeTransform {

  transform(robotdetails: Robotdetails[], status: string): Robotdetails[] {
      if(!status){
        return robotdetails;
      }
      
      return robotdetails.filter(robot => {
        return robot.status.includes(status);
      })
    }

}
