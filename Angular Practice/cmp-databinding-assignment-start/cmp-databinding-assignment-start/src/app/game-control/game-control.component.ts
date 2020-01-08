import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();
  numberCounter = 0;
  interval;

  constructor() { }

  ngOnInit() {
  }

  tick() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.numberCounter + 1);
      this.numberCounter++;
    }, 1000);
  }

  onPauseGame(){
    clearInterval(this.interval);
  }

}
