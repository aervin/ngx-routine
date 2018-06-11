import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public componentNavLinks = [
    {
      displayValue: 'Master/detail',
      routerLink: 'components/master-detail'
    }
  ];
}
