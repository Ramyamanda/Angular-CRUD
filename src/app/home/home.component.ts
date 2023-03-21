import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventHandlerService } from 'src/app/event-handler.service';
// import { AddComponent } from 'src/app/add/add.component';
// import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any=[];
  
  constructor(private _http:HttpClient,private _eh:EventHandlerService, private _router:Router) { }
 
  ngOnInit(): void {
    this.getUsers();
}
getUsers(){
  this._eh.getData().subscribe((value:any)=>this.data=value)
}
DeleteUser(i: any){
  if(confirm('Do you want to delete this user?')){
    this.data.splice(i,1);
  }
  this._router.navigate(['/home'])
}
EditUser(id:any){
  this._router.navigate(['/home',id])
}
}
