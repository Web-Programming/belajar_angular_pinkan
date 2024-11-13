import { Component } from '@angular/core';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
    <ing class="Listing-Photo" [src]="HousingLocation.photo" alt="Exterior photo of {{ housingLocation.name}}">
    <h2 class="listing-heading">{{
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation: HousingLocation
}
