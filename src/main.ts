import { bootstrapApplication } from '@angular/platform-browser';
import { EmployeeComponent } from './app/employee/employee';


bootstrapApplication(EmployeeComponent)
  .catch(err => console.error(err));
