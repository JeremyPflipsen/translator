import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { FormControl } from '@angular/forms';

interface Language {
  value: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, ToolbarComponent, MaterialModule],
})
export class AppComponent {
  title = 'frontend';
  firstLanguageText: string =
    'To dream the impossible dream, that is my quest.';
  secondLanguageText: string =
    'El soñar... el sueño imposible, Ésta es mi búsqueda.';

  selectedFirstLanguage: string = 'English';
  selectedSecondLanguage: string = 'Spanish';

  languages: Language[] = [
    { value: 'English' },
    { value: 'Spanish' },
    { value: 'French' },
    { value: 'Japanese' },
  ];

  timeOfLastUserInput: Date = new Date();
  minTimeBetweenCalls: number = 3000; //in milliseconds
  timeSinceLastUserInput: number = 0
  blockToTime: Date = new Date()
  sufficientTimeHasPassed(): boolean {
    let now: Date = new Date();
    this.timeSinceLastUserInput = now.getTime() - this.timeOfLastUserInput.getTime();
    return this.timeSinceLastUserInput > this.minTimeBetweenCalls
  }

  onUserInput() {
    // console.log("USERINPUT. now = ", new Date().getTime())
    //Wait some time between calls to save processing
    let timeOfCurrentUserInput: Date = new Date()
    let timeToWait: number = 0;
    if (!this.sufficientTimeHasPassed()) {
      timeToWait = this.minTimeBetweenCalls - this.timeSinceLastUserInput;
    }

    // console.log("SETTIMEOUT timeToWait: ", timeToWait)
    this.blockToTime = new Date(timeOfCurrentUserInput.getTime() + timeToWait)
    this.timeOfLastUserInput = timeOfCurrentUserInput
    // console.log("blockToTime:", this.blockToTime.getTime())

    setTimeout(() => {
      this.callTranslateApi()
    }, timeToWait);
  }

  callTranslateApi() {
    if (new Date().getTime() < this.blockToTime.getTime()) {
      // console.log("NOT ENOUGH TIME PASSED. now = ", new Date().getTime())
      // console.log("TimeofLastUserInput: ", this.timeOfLastUserInput.getTime())
      return
    }

    //do logic here
    console.log("API CALL. now = ", new Date().getTime())
  }

}
