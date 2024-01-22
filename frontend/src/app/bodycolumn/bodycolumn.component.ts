import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bodycolumn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bodycolumn.component.html',
  styleUrl: './bodycolumn.component.css'
})
export class BodycolumnComponent {

  @Input() secondLanguageText: string =
    'El soñar... el sueño imposible, Ésta es mi búsqueda';

  @Input() selectedLanguage: string';

  languages: Language[] = [
    { value: 'English' },
    { value: 'Spanish' },
    { value: 'French' },
    { value: 'Japanese' },
  ];
}
