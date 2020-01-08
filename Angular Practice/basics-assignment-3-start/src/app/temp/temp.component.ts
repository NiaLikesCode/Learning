import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  date = new Date();
  todaysDate = "Last Sync: " + this.date.getDate() + "/"
  + (this.date.getMonth()+1)  + "/" 
  + this.date.getFullYear() + " @ "  
  + this.date.getHours() + ":"  
  + this.date.getMinutes() + ":" 
  + this.date.getSeconds();

  constructor() { }

  ngOnInit() {
  }

}
