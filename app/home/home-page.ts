import { EventData, fromObject } from "tns-core-modules/data/observable/observable";
import { Page } from "tns-core-modules/ui/page/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";
import { Color } from "tns-core-modules/color/color";
import { Button } from "tns-core-modules/ui/button/button";
import { interval } from "rxjs";

let page;
let view;

export function pageLoaded(args: EventData) {
  /*
  This gets a reference this page’s <StackLayout> UI component. You can
  view the API reference of the Page to see what’s available at
  https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
  */
  this.page = <StackLayout>args.object;
  this.view = <Button>this.page.getViewById("bigBtn");
  console.log("loading");
}

export function run(args: EventData) {
  console.log("run");
}

// private onTap() {
//     interval(1000);
//     view.backgroundColor = new Color("red");
//     // this.view.animate({ backgroundColor: new Color("green"), duration: 2000 });
//   }

//   private refreshText() {
//     this.text = this.minutes + " minutes";
//   }

//   private onPlus() {
//     this.minutes = this.minutes + 1;
//     this.refreshText();
//   }

//   private onMinus() {
//     this.minutes = this.minutes - 1;
//     this.refreshText();
//   }