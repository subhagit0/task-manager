import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators, } from '@angular/forms';
import { AddTaskService } from 'src/app/services/add-task.service';
import { TaskManagementTableDataService } from 'src/app/services/task-management-table-data.service';
import { addData } from './models/interfaceadddata';

export interface PeriodicElement {
  file_name: string;
  file_path: string;
  file_type: string;
  file_location: string;
  file_status: string;
  createdAt: string;
}

/** Constants used to fill up our data base. */

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-task-management-portal',
  templateUrl: './task-management-portal.component.html',
  styleUrls: ['./task-management-portal.component.css']
})

export class TaskManagementPortalComponent implements AfterViewInit {

  // displayedColumns: string[] = ['id','name', 'email', 'designation', 'created'];

  displayedColumns: string[] = ['file_name', 'file_path', 'file_type', 'file_location', 'file_status', 'createdAt'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private taskdata: TaskManagementTableDataService,) {

    this.taskdata.getTaskData().subscribe((data: any) => {
      console.log(data);
      this.dataSource.data = data.result;
    });

    // const a = this.taskdata.getTaskData();
    // this.dataSource.data = a;
    // console.log(a);
  }


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

  file: boolean = true;
  tasks: FormGroup;
  model: addData;
  fileType = 1;
  option: number | undefined


  constructor(private addtaskservice: AddTaskService, private dialog: MatDialog, private dialogRef: MatDialogRef<AddTaskPopupPortal>) {

    this.tasks = new FormGroup({
      fileName: new FormControl('', [Validators.required]),
      filePath: new FormControl('', [Validators.required]),
      fileType: new FormControl(''),
      fileLocation: new FormControl('')
    });

    this.model = this.tasks.value;

  }

  onItemChange(value: any) {
    console.log(" Value is : ", value);
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.tasks.controls[controlName].hasError(errorName);
  }


  // taskSaveSubmit() {
  //   this.addtaskservice.adduserTask(this.tasks.value).subscribe((result) => {
  //     console.log(result);
  //   });


  //  taskSaveSubmit() {
  //   this.addtaskservice.adduserTask(this.tasks.value).subscribe((result) => {
  //     console.log(result);
  //   });
  // }


  taskSaveSubmit() {
    this.model = this.tasks.value;
    this.addtaskservice.adduserTask(this.model).subscribe (result => {
        // if ( ! result.error) {
        //   this.router.navigateByUrl('/login');
        // }
        console.log(this.tasks.value);
      }
    )
  }





  close() {
    return this.dialogRef.close();
  }

  changeGender(e: any) {
    console.log(e.target.value);
  }


  ngOnInit(): void { }


}