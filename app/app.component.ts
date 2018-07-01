import { Component } from "@angular/core";
import { Vibrate } from 'nativescript-vibrate';
import * as timerModule from "timer";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {

  text: string;
  btnText: string = 'Go-go-go!!!';
  minutes: number = 0;
  _timerFlag: boolean = false;
  set timerFlag(b: boolean) {
    console.log(b);
    this.btnText = b ? 'Wait...' : 'Go-go-go!!!';
    this._timerFlag = b;
  }

  constructor() {
    this.refreshText();
  }

  private onTap() {
    let vibrator = new Vibrate();
    if (this.minutes) {
      if (this._timerFlag) {
        this.timerFlag = false;
        return;
      }
      this.timerFlag = true;
      timerModule.setTimeout(() => { 
        if (this._timerFlag) {
          vibrator.vibrate(1000); 
        }
        // console.log('vibrate');
        this.timerFlag = false;
      }, this.minutes * 60000);
    }
  }

  private refreshText() {
    this.text = this.minutes + " minutes";
  }

  private onPlus() {
    this.minutes = this.minutes + 1;
    this.refreshText();
  }

  private onMinus() {
    if (this.minutes) {
      this.minutes = this.minutes - 1;
    }
    this.refreshText();
  }
}