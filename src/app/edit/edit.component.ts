import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventHandlerService } from 'src/app/event-handler.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  userDetails: any;
  apiData: any;
  id: any;
  loading: boolean = true;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _eh: EventHandlerService,
    private _router: Router
  ) {}
  // public id:string;
  data:any;  
  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._eh.getData().subscribe((data) => {
      this.apiData = data;
      this.userDetails = this.GetById(this.id);
      this.loading = false;
    });
  }

  private findIndex = (id: number) =>
    this.apiData.findIndex((x: any) => x.id == id);

  GetById(id: any) {
    const index = this.findIndex(id);
    return this.apiData[index];
  }

  update() {
    let index = this.findIndex(this.id);
    this._eh.userDetails[index] = this.userDetails;
    this._router.navigate(['home']);
  }
}