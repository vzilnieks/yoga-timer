import { Component } from "@angular/core";
import { Vibrate } from 'nativescript-vibrate';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {

  text: string;
  minutes: number = 0;

  constructor() {
    this.refreshText();
  }

  private onTap() {
    let vibrator = new Vibrate();
    // interval(1000);
    if (this.minutes > 0) {
      var timeInterval = setInterval(function() { 
        vibrator.vibrate(1000); 
        // alert("Hello"); 
      }, this.minutes * 1000);
    }
    clearInterval(timeInterval);
    // view.backgroundColor = new Color("red");
    // this.view.animate({ backgroundColor: new Color("green"), duration: 2000 });
  }

  private refreshText() {
    this.text = this.minutes + " minutes";
  }

  private onPlus() {
    this.minutes = this.minutes + 1;
    this.refreshText();
  }

  private onMinus() {
    if (this.minutes > 0) this.minutes = this.minutes - 1;
    this.refreshText();
  }
}