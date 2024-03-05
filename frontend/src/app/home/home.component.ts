import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private http: HttpClient) {
  }

  title = 'frontend';

  firstLanguageText: string =
    'To dream the impossible dream, that is my quest.';
  secondLanguageText: string =
    'Soñar el sueño imposible, esa es mi búsqueda.';

  selectedFirstLanguage: string = 'English';
  selectedSecondLanguage: string = 'Spanish';

  languages: Language[] = [
    { value: 'English' },
    { value: 'Spanish' },
    { value: 'French' },
    { value: 'Japanese' },
    { value: 'Arabic' },
    { value: 'Simplified Chinese' },
    { value: 'Traditional Chinese' },
    { value: 'Czech' },
    { value: 'German' },
    { value: 'Portuguese' },
    { value: 'Turkish' },
  ];

  maxTimeBetweenApiCalls: number = 700 //in milliseconds
  timeOfLastApiCall: Date = new Date()
  onUserInput() {
    //Wait some time between calls to save processing and reduce motion
    setTimeout(() => {
      this.callTranslateApi()
    }, this.maxTimeBetweenApiCalls);
  }

  callTranslateApi() {
    const now = new Date()
    if (now.getTime() - this.timeOfLastApiCall.getTime() < this.maxTimeBetweenApiCalls) {
      return
    }

    const apiBaseUrl: string = "https://d191rgactftfwo.cloudfront.net/translate" // Replace with your cloudfront distribution url
    const params: string = "?fromLanguage=" + this.selectedFirstLanguage
      + "&toLanguage=" + this.selectedSecondLanguage
      + "&textToTranslate=" + encodeURIComponent(this.firstLanguageText)
    const fullUrl = apiBaseUrl + params
    this.http.get(fullUrl).pipe().subscribe(data => {
      this.secondLanguageText = data.toString()
    })
    this.timeOfLastApiCall = now
  }

  swap() {
    const tempLanguageText = this.firstLanguageText
    this.firstLanguageText = this.secondLanguageText
    this.secondLanguageText = tempLanguageText

    const tempSelectedLanguage = this.selectedFirstLanguage
    this.selectedFirstLanguage = this.selectedSecondLanguage
    this.selectedSecondLanguage = tempSelectedLanguage

    this.callTranslateApi()
  }

}

interface Language {
  value: string;
}