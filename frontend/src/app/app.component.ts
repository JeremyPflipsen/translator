import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { FormControl } from '@angular/forms';
import { min } from 'rxjs';

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
  waitTime: number = 500; //in milliseconds
  timeSinceLastUserInput: number = 0
  blockToTime: Date = new Date()
  maxTimeBetweenApiCalls: number = 1000
  timeOfLastApiCall: Date = new Date()
  onUserInput() {
    //Wait some time between calls to save processing
    let now: Date = new Date();

    this.blockToTime = new Date(now.getTime() + this.waitTime)

    setTimeout(() => {
      this.callTranslateApi()
    }, this.waitTime);
  }

  callTranslateApi() {
    let now = new Date()
    if (now.getTime() < this.blockToTime.getTime()
      && now.getTime() - this.timeOfLastApiCall.getTime() < this.maxTimeBetweenApiCalls) {
      return
    }

    //do logic here
    console.log("API CALL. now = ", new Date().getTime())
    this.timeOfLastApiCall = now
  }

}
