import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() addNum = new EventEmitter<{num: number, type: string}>();

  number = 0;
  numberGenerator ;

  onGenerateNum() {
    this.numberGenerator = setInterval(
      () => {
      this.number = this.number + 1;
      if (this.number % 2 === 0) {
        this.addNum.emit({num: this.number, type: 'even'});
      } else {
        this.addNum.emit({num: this.number, type: 'odd'});
      }
      }, 1000);
  }

  onStop() {
    clearInterval( this.numberGenerator);
    this.number = 0;
  }

  constructor() { }

  ngOnInit() {
  }

}
