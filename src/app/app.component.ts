import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-game';

  generatedNumbers: {num: number , type: string}[] = [];

  addNumber(generatedNumber: {num: number, type: string}) {
    this.generatedNumbers.push({
      num: generatedNumber.num,
      type: generatedNumber.type
    });
    console.log(generatedNumber.num);
  }
}
