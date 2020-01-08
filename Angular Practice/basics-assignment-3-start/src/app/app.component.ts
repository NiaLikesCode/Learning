import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toggle = true;
  toggles = [];

  doToggle(){
    this.toggle = !this.toggle
    this.toggles.push(new Date());
  }
}
