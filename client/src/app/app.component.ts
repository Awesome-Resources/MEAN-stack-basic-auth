import {Component} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /** collections of subscribed variables */
  subscriptions: Subscription[] = [];

  constructor(private router: Router) {
    let chRouter: Subscription = this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
        }
      }
    );
    this.subscriptions.push(chRouter);
  }
}
