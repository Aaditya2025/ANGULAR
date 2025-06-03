import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.html',
  styleUrls: ['./employee.css']
})
export class EmployeeComponent {
  employee = {
    name: '',
    email: ''
  };

  employees: { name: string; email: string }[] = [];
  submitted: boolean = false;

  isNameValid(): boolean {
    return /^[a-zA-Z ]+$/.test(this.employee.name);
  }

  isEmailValid(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.employee.email);
  }

  onSubmit() {
    this.submitted = true;

    if (this.employee.name && this.employee.email && this.isNameValid() && this.isEmailValid()) {
      this.employees.push({ ...this.employee });
      this.employee = { name: '', email: '' };
      this.submitted = false;
    }
  }
}
