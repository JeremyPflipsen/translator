import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbar, MatToolbarRow, MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  
}
