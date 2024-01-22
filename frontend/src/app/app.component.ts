import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { MaterialModule } from './material/material.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ToolbarComponent, MaterialModule]
})
export class AppComponent {
  title = 'frontend';
  firstLanguageText:string = 'To dream the impossible dream, that is my quest.'
  secondLanguageText:string = 'El soñar... el sueño imposible'
  languages: string[] = ['English', 'Spanish', 'French', 'Japanese']
}
