import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-architecture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './architecture.component.html',
  styleUrl: './architecture.component.css'
})
export class ArchitectureComponent {
  servicesArchitectureImagePath:string = "../../assets/services-architecture.svg"
  developerFlowImagePath:string = "../../assets/developer-flow.svg"
}
