"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page;
var view;
function pageLoaded(args) {
    /*
    This gets a reference this page’s <StackLayout> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    this.page = args.object;
    this.view = this.page.getViewById("bigBtn");
    console.log("loading");
}
exports.pageLoaded = pageLoaded;
function run(args) {
    console.log("run");
}
exports.run = run;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0EsSUFBSSxJQUFJLENBQUM7QUFDVCxJQUFJLElBQUksQ0FBQztBQUVULG9CQUEyQixJQUFlO0lBQ3hDOzs7O01BSUU7SUFDRixJQUFJLENBQUMsSUFBSSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBVEQsZ0NBU0M7QUFFRCxhQUFvQixJQUFlO0lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckIsQ0FBQztBQUZELGtCQUVDO0FBRUQsb0JBQW9CO0FBQ3BCLHNCQUFzQjtBQUN0QiwrQ0FBK0M7QUFDL0MscUZBQXFGO0FBQ3JGLE1BQU07QUFFTiw0QkFBNEI7QUFDNUIsNkNBQTZDO0FBQzdDLE1BQU07QUFFTix1QkFBdUI7QUFDdkIsdUNBQXVDO0FBQ3ZDLDBCQUEwQjtBQUMxQixNQUFNO0FBRU4sd0JBQXdCO0FBQ3hCLHVDQUF1QztBQUN2QywwQkFBMEI7QUFDMUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0L3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvci9jb2xvclwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uL2J1dHRvblwiO1xuaW1wb3J0IHsgaW50ZXJ2YWwgfSBmcm9tIFwicnhqc1wiO1xuXG5sZXQgcGFnZTtcbmxldCB2aWV3O1xuXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgLypcbiAgVGhpcyBnZXRzIGEgcmVmZXJlbmNlIHRoaXMgcGFnZeKAmXMgPFN0YWNrTGF5b3V0PiBVSSBjb21wb25lbnQuIFlvdSBjYW5cbiAgdmlldyB0aGUgQVBJIHJlZmVyZW5jZSBvZiB0aGUgUGFnZSB0byBzZWUgd2hhdOKAmXMgYXZhaWxhYmxlIGF0XG4gIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FwaS1yZWZlcmVuY2UvY2xhc3Nlcy9fdWlfcGFnZV8ucGFnZS5odG1sXG4gICovXG4gIHRoaXMucGFnZSA9IDxTdGFja0xheW91dD5hcmdzLm9iamVjdDtcbiAgdGhpcy52aWV3ID0gPEJ1dHRvbj50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJiaWdCdG5cIik7XG4gIGNvbnNvbGUubG9nKFwibG9hZGluZ1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bihhcmdzOiBFdmVudERhdGEpIHtcbiAgY29uc29sZS5sb2coXCJydW5cIik7XG59XG5cbi8vIHByaXZhdGUgb25UYXAoKSB7XG4vLyAgICAgaW50ZXJ2YWwoMTAwMCk7XG4vLyAgICAgdmlldy5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgQ29sb3IoXCJyZWRcIik7XG4vLyAgICAgLy8gdGhpcy52aWV3LmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcImdyZWVuXCIpLCBkdXJhdGlvbjogMjAwMCB9KTtcbi8vICAgfVxuXG4vLyAgIHByaXZhdGUgcmVmcmVzaFRleHQoKSB7XG4vLyAgICAgdGhpcy50ZXh0ID0gdGhpcy5taW51dGVzICsgXCIgbWludXRlc1wiO1xuLy8gICB9XG5cbi8vICAgcHJpdmF0ZSBvblBsdXMoKSB7XG4vLyAgICAgdGhpcy5taW51dGVzID0gdGhpcy5taW51dGVzICsgMTtcbi8vICAgICB0aGlzLnJlZnJlc2hUZXh0KCk7XG4vLyAgIH1cblxuLy8gICBwcml2YXRlIG9uTWludXMoKSB7XG4vLyAgICAgdGhpcy5taW51dGVzID0gdGhpcy5taW51dGVzIC0gMTtcbi8vICAgICB0aGlzLnJlZnJlc2hUZXh0KCk7XG4vLyAgIH0iXX0=