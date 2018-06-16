"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_vibrate_1 = require("nativescript-vibrate");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.minutes = 0;
        this.refreshText();
    }
    AppComponent.prototype.onTap = function () {
        var vibrator = new nativescript_vibrate_1.Vibrate();
        // interval(1000);
        if (this.minutes > 0) {
            var timeInterval = setInterval(function () {
                vibrator.vibrate(1000);
                // alert("Hello"); 
            }, this.minutes * 1000);
        }
        clearInterval(timeInterval);
        // view.backgroundColor = new Color("red");
        // this.view.animate({ backgroundColor: new Color("green"), duration: 2000 });
    };
    AppComponent.prototype.refreshText = function () {
        this.text = this.minutes + " minutes";
    };
    AppComponent.prototype.onPlus = function () {
        this.minutes = this.minutes + 1;
        this.refreshText();
    };
    AppComponent.prototype.onMinus = function () {
        if (this.minutes > 0)
            this.minutes = this.minutes - 1;
        this.refreshText();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsNkRBQStDO0FBTy9DO0lBS0U7UUFGQSxZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sNEJBQUssR0FBYjtRQUNFLElBQUksUUFBUSxHQUFHLElBQUksOEJBQU8sRUFBRSxDQUFDO1FBQzdCLGtCQUFrQjtRQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDO2dCQUM3QixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixtQkFBbUI7WUFDckIsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUNELGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QiwyQ0FBMkM7UUFDM0MsOEVBQThFO0lBQ2hGLENBQUM7SUFFTyxrQ0FBVyxHQUFuQjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7SUFDeEMsQ0FBQztJQUVPLDZCQUFNLEdBQWQ7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sOEJBQU8sR0FBZjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQW5DVSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7O09BRVcsWUFBWSxDQW9DeEI7SUFBRCxtQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFZpYnJhdGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdmlicmF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgdGV4dDogc3RyaW5nO1xuICBtaW51dGVzOiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucmVmcmVzaFRleHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25UYXAoKSB7XG4gICAgbGV0IHZpYnJhdG9yID0gbmV3IFZpYnJhdGUoKTtcbiAgICAvLyBpbnRlcnZhbCgxMDAwKTtcbiAgICBpZiAodGhpcy5taW51dGVzID4gMCkge1xuICAgICAgdmFyIHRpbWVJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgdmlicmF0b3IudmlicmF0ZSgxMDAwKTsgXG4gICAgICAgIC8vIGFsZXJ0KFwiSGVsbG9cIik7IFxuICAgICAgfSwgdGhpcy5taW51dGVzICogMTAwMCk7XG4gICAgfVxuICAgIGNsZWFySW50ZXJ2YWwodGltZUludGVydmFsKTtcbiAgICAvLyB2aWV3LmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcInJlZFwiKTtcbiAgICAvLyB0aGlzLnZpZXcuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwiZ3JlZW5cIiksIGR1cmF0aW9uOiAyMDAwIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoVGV4dCgpIHtcbiAgICB0aGlzLnRleHQgPSB0aGlzLm1pbnV0ZXMgKyBcIiBtaW51dGVzXCI7XG4gIH1cblxuICBwcml2YXRlIG9uUGx1cygpIHtcbiAgICB0aGlzLm1pbnV0ZXMgPSB0aGlzLm1pbnV0ZXMgKyAxO1xuICAgIHRoaXMucmVmcmVzaFRleHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25NaW51cygpIHtcbiAgICBpZiAodGhpcy5taW51dGVzID4gMCkgdGhpcy5taW51dGVzID0gdGhpcy5taW51dGVzIC0gMTtcbiAgICB0aGlzLnJlZnJlc2hUZXh0KCk7XG4gIH1cbn0iXX0=