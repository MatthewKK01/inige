import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

interface Users {
  student_id: number | null;
  name: string;
  sex: string;
  age: number | null;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {

  constructor(private http: HttpClient) { }
  newUserData: Users = { student_id: 12, name: 'Mate', sex: 'lala', age: 18 };

  dataSource: Users[] = [];
  ngOnInit(): void {
    this.http.get<Users[]>('assets/students.json').subscribe((data: Users[]) => {
      this.dataSource = data;
      console.log(data);
    });
  }
  addUser() {
    const newUser: Users = { ...this.newUserData }; // Create a new object with the same properties
    console.log(newUser);

    this.dataSource = [...this.dataSource, newUser];
    console.log(this.dataSource);
  }
  displayedColumns: string[] = ['id', 'name', 'sex', 'age'];

}
