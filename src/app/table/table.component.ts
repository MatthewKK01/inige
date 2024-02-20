import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

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

  constructor(private http: HttpClient, public dialog: MatDialog) { }
  newUserData: Users = { student_id: null, name: '', sex: '', age: null };

  dataSource: Users[] = [];
  ngOnInit(): void {
    this.http.get<Users[]>('assets/students.json').subscribe((data: Users[]) => {
      this.dataSource = data;
      console.log(data);
    });
  }
  addUser() {
    const newUser: Users = { ...this.newUserData }; // Create a new object with the same properties


    this.dataSource = [...this.dataSource, newUser];
    this.newUserData = { student_id: null, name: '', sex: '', age: null };


  }
  removeUser(user: Users) {
    const index = this.dataSource.findIndex((item: any) => item === user);

    if (index !== -1) {
      this.dataSource.splice(index, 1);
      this.dataSource = [...this.dataSource];
    }
  }
  displayedColumns: string[] = ['id', 'name', 'sex', 'age'];
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, element: any): void {
    this.dialog.open(DialogComponent, {
      width: '370px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { element: element }
    });
  }
}


