import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators, } from '@angular/forms';
import { AddUsersService } from 'src/app/services/add-users.service';
import { SweetAlertOptions } from 'sweetalert2';
import Swal from 'sweetalert2'


export interface PeriodicElement {
  path: string;
  position: number;
  filename: string;
  date: string;
}

/** Constants used to fill up our data base. */

const ELEMENT_DATA: PeriodicElement[] = [
  
  { position: 1, path: 'https://apnaghar1.shyamsteel.com/', filename: 'Tirupati Construction', date: '01-12-2022' },
  { position: 2, path: 'https://apnaghar2.shyamsteel.com/', filename: 'Balagi Construction', date: '02-12-2022' },
  { position: 3, path: 'https://apnaghar3.shyamsteel.com/', filename: 'patna Construction', date: '03-12-2022' },
  { position: 4, path: 'https://apnaghar4.shyamsteel.com/', filename: 'Tirupati Construction', date: '04-12-2022' },
  { position: 5, path: 'https://apnaghar5.shyamsteel.com/', filename: 'Suvom Construction', date: '05-12-2022' },
  { position: 6, path: 'https://apnaghar6.shyamsteel.com/', filename: 'Abc Construction', date: '06-12-2022' },
  { position: 7, path: 'https://apnaghar7.shyamsteel.com/', filename: 'Star Housing Construction', date: '07-12-2022' },
  { position: 8, path: 'https://apnaghar8.shyamsteel.com/', filename: 'BBC Construction', date: '08-12-2022' },
  { position: 9, path: 'https://apnaghar9.shyamsteel.com/', filename: 'Xyz Construction', date: '09-12-2022' },
  { position: 10, path: 'https://apnaghar10.shyamsteel.com/', filename: 'Srinivasan Construction', date: '10-12-2022' }

];



@Component({
  selector: 'app-user-management-portal',
  templateUrl: './user-management-portal.component.html',
  styleUrls: ['./user-management-portal.component.css']
})
export class UserManagementPortalComponent implements AfterViewInit {

  displayedColumns: string[] = ['position', 'path', 'filename', 'date'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  getusersavedata:any

  constructor(private dialog: MatDialog, private adduserdisplay:AddUsersService) {

  this.adduserdisplay.getusersavedata().subscribe((data)=>{
    // console.log("data", data);
    this.getusersavedata= data;
  });

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


  addUsers() {
    this.dialog.open(AddUsers, {
      width: '30%',
    });
  }



  ngOnInit(): void {
  }

}

@Component({
  selector: 'add-usres',
  templateUrl: './add-users.html',
  styleUrls: ['./user-management-portal.component.css']
})

export class AddUsers implements OnInit {

  adduser: FormGroup

  constructor(private dialog: MatDialog, private addusreslist: AddUsersService, private dialogRef: MatDialogRef<AddUsers>) {

    this.adduser = new FormGroup({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),

    });

  }

  error = false;

  addUser() {
    // console.log(this.adduser.value);
    this.addusreslist.addUserSave(this.adduser.value).subscribe((result: any) => {
      if (this.adduser.valid && this.error === false ) {
        this.adduser.reset();
        this.dialog.closeAll();
        console.log(result)
        // alert("Form Submit sucessfully");
        Swal.fire('','Add user Successfully registered', 'success')
      }
    })

    
  }



  // reset(){
  //   this.adduser.reset()
  // }



  // onSubmit (){
  //   console.log(this.userlogin.value);
  //   this.userlogindata.userloingSave(this.userlogin.value).subscribe((result: any) => {
  //   localStorage.setItem("token", result.token);
  //   this.router.navigate(['/task-management']);
  //   console.log(result)
  //   })
  // }

  

  alertOpt: SweetAlertOptions = {};
  

  ngOnInit() :void {

    this.alertOpt = {
      title: 'Success!',
      text: 'Saved successfuly',
      toast: false,
      allowOutsideClick: false
    };

  }


  close() {
    this.dialogRef.close();
}


  

}