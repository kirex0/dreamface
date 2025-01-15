import { inject, Injectable } from '@angular/core';
import { Robotdetails } from '../model/robotdetails.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// Used to make API calls to the database
export class RobotdetailsService {
  http = inject(HttpClient);
  
  getRobots(){
    const url = `http://localhost:3000/robots`;
    return this.http.get<Array<Robotdetails>>(url);
  }

  getRobotById(id: string){
    const url = `http://localhost:3000/robots/${id}`;
    return this.http.get<Robotdetails>(url);
  }
}
