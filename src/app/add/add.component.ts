import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventHandlerService } from 'src/app/event-handler.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  userDetails: any = {};
  constructor(private _eh: EventHandlerService,private _router: Router) {}

  ngOnInit(): void {

  }
  addUser() {
    this._eh.userDetails.push(this.userDetails);
    this._router.navigate(['home']);
    
  }
}