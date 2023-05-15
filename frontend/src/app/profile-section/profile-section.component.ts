import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.scss'],
})
export class ProfileSectionComponent {
  description!: string;

  ngOnInit() {
    this.description =
      "Actuellement à l'école 42 Angoulême, je suis à la recherche d'un stage de 6 mois dans le domaine du web dans la cadre de mon cursus à l'école 42.";
  }
}
