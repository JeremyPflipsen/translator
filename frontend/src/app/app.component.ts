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
    imports: [RouterOutlet, ToolbarComponent, MaterialModule]
})
export class AppComponent {
  title = 'frontend';
  firstLanguageText: string =
    'To dream the impossible dream, that is my quest.';
  secondLanguageText: string =
    'El soñar... el sueño imposible, Ésta es mi búsqueda';

  selectedFirstLanguage: string = 'English';
  selectedSecondLanguage: string = 'Spanish';

  languages: Language[] = [
    { value: 'English' },
    { value: 'Spanish' },
    { value: 'French' },
    { value: 'Japanese' },
  ];
}
