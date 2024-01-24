import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { FormControl } from '@angular/forms';
import { first, min } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Language {
  value: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, ToolbarComponent, MaterialModule, HttpClientModule],
})
export class AppComponent {
  constructor(private http: HttpClient) { }

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
    const now = new Date()
    if (now.getTime() < this.blockToTime.getTime()
      && now.getTime() - this.timeOfLastApiCall.getTime() < this.maxTimeBetweenApiCalls) {
      return
    }

    //do logic here
    const apiBaseUrl: string = "https://d2i8v3z9i5u64m.cloudfront.net"
    const params: string = "?fromLanguage=" + this.selectedFirstLanguage
                            + "&toLanguage=" + this.selectedSecondLanguage 
                            + "&textToTranslate=" + encodeURIComponent(this.firstLanguageText)
    const fullUrl = apiBaseUrl + params
    console.log("Calling translate API at " + fullUrl)
    this.http.get(fullUrl).pipe().subscribe(data => {
      console.log("data")
      console.log(data)
      this.secondLanguageText = data.toString()
    })
    this.timeOfLastApiCall = now
  }

}
