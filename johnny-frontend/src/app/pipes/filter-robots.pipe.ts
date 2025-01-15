import { Pipe, PipeTransform } from '@angular/core';
import { Robotdetails } from '../model/robotdetails.type';

@Pipe({
  name: 'filterRobots'
})
export class FilterRobotsPipe implements PipeTransform {

  transform(robotdetails: Robotdetails[], searchTerm: string): Robotdetails[] {
    if(!searchTerm){
      return robotdetails;
    }
    
    const text = searchTerm.toLowerCase();
    return robotdetails.filter(robot => {
      return robot.name.toLowerCase().includes(text);
    })
  }

}
