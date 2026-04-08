import { Component } from '@angular/core';
import { Header } from '../layout/center/center_header/header'; 
import { Footer } from '../layout/center/center_footer/footer'; 

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './center.html',
  styleUrl: './center.css'
})
export class Center {}