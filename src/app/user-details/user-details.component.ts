import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventHandlerService } from 'src/app/event-handler.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  id: any;
  userDetails: any;
  loading: boolean=true;
  apiData: any;
  data:any=[];
  editMode=true;
  hello:any

  constructor(private _activatedRoute:ActivatedRoute, private _eh:EventHandlerService, private _router:Router) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._eh.getData().subscribe((data) => {
      this.apiData = data;
      this.userDetails = this.GetById(this.id);
      this.loading = false;
      this.getUsers();
    });
  }
  getUsers(){
    this._eh.getData().subscribe((value:any)=>this.data=value)
  }
  private findIndex = (id: number) =>
    this.apiData.findIndex((x: any) => x.id == id);

  GetById(id: any) {
    const index = this.findIndex(id);
    return this.apiData[index];
  }
  EditUser(id:any){
    this._router.navigate(['/home',id,'edit']);

  }
  update() {
    let index = this.findIndex(this.id);
    this._eh.userDetails[index] = this.userDetails;
    this._router.navigate(['home']);
  }
  goBack(){
    this._router.navigate(['home'])
  }
}