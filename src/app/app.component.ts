import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EventHandlerService } from './event-handler.service';
// import { EventHandlerService } from './event-handler.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularTask';
  public  : any=[];
  // public msg: any;
  // parent2: any;
  // parent3: any;
  constructor(private _http:HttpClient, private _eh:EventHandlerService) {}
  ngOnInit():void {
  }
  // private _eh: EventHandlerService
  // sendData(msgString: any) {
  //   this._eh.recivedString.emit(msgString);
  // }
  // sendData2(msgString: any) {
  //   this._eh.rec2String.emit(msgString);
  // }
  // sendData3(msgString: any) {
  //   this._eh.recstring3.emit(msgString);
  // }
}