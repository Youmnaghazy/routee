import { Component } from '@angular/core';
import { GallaryComponent } from '../gallary/gallary.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GallaryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
