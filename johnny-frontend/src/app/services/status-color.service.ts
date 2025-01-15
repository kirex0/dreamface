import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// This is used to set the color of the word based on the status.
export class StatusColorService {
  getStatusColor(status: string): string {
    switch (status) {
      case 'Active':
        return 'green';
      case 'Inactive':
        return '#3c4142';
      case 'Error':
        return 'red';
      default:
        return 'black';
    }
  }
}