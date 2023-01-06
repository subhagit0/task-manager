import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl,Validators,} from '@angular/forms';

export interface PeriodicElement {
  path: string;
  position: number;
  filename: string;
  date: string;
}

/** Constants used to fill up our data base. */

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, path: 'https://apnaghar1.shyamsteel.com/', filename: 'Tirupati Construction', date: '01-12-2022'},
  {position: 2, path: 'https://apnaghar2.shyamsteel.com/', filename: 'Balagi Construction', date: '02-12-2022'},
  {position: 3, path: 'https://apnaghar3.shyamsteel.com/', filename: 'patna Construction', date: '03-12-2022'},
  {position: 4, path: 'https://apnaghar4.shyamsteel.com/', filename: 'Tirupati Construction', date: '04-12-2022'},
  {position: 5, path: 'https://apnaghar5.shyamsteel.com/', filename: 'Suvom Construction', date: '05-12-2022'},
  {position: 6, path: 'https://apnaghar6.shyamsteel.com/', filename: 'Abc Construction', date: '06-12-2022'},
  {position: 7, path: 'https://apnaghar7.shyamsteel.com/', filename: 'Star Housing Construction', date: '07-12-2022'},
  {position: 8, path: 'https://apnaghar8.shyamsteel.com/', filename: 'BBC Construction', date: '08-12-2022'},
  {position: 9, path: 'https://apnaghar9.shyamsteel.com/', filename: 'Xyz Construction', date: '09-12-2022'},
  {position: 10,path: 'https://apnaghar10.shyamsteel.com/', filename: 'Srinivasan Construction', date: '10-12-2022'}

];

@Component({
  selector: 'app-task-management-portal',
  templateUrl: './task-management-portal.component.html',
  styleUrls: ['./task-management-portal.component.css']
})
export class TaskManagementPortalComponent implements AfterViewInit {

  displayedColumns: string[] = ['position', 'path', 'filename', 'date'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private dialog:MatDialog) { }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openTaskinfo() {
    this.dialog.open(AddTaskPopupPortal, {
        width: '60%',
    });
}

  ngOnInit(): void {
  }

}

@Component({
  selector: 'add-task-popup-portal',
  templateUrl: './add-task-popup-portal.html',
  styleUrls: ['./task-management-portal.component.css']
})

export class AddTaskPopupPortal implements OnInit {

file:boolean=true;
tasks: FormGroup;
fileType = 1;

constructor() { 
    this.tasks = new FormGroup({
    path: new FormControl('', [Validators.required]),
    filename: new FormControl('', [Validators.required]),
    fileType: new FormControl(''),
    changedIn: new FormControl('')
  });
}


onItemChange(value: any){
  console.log(" Value is : ", value );
}

public checkError = (controlName: string, errorName: string) => {
  return this.tasks.controls[controlName].hasError(errorName);
}


taskSubmit(){
  console.log (this.tasks.value)
}

changeGender(e:any) {
  console.log(e.target.value);
}


ngOnInit(): void { }


}